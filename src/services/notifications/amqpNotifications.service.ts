import { Injectable, Logger } from '@nestjs/common';
import * as amqp from 'amqplib';
import { NotificationsService } from './notifications.service';
import { AmqpNotificationDto } from './dto/amqpNotification.dto';

@Injectable()
export class AmqpNotificationsService {
  constructor(private readonly notificationsServices: NotificationsService) {
    this.initNotification()
      .then(() => {
        Logger.log(
          'Amqp Notification service is ready',
          'AmqpNotificationService',
        );
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  async initNotification() {
    const connection = await amqp.connect('amqp://localhost');
    const chan = await connection.createChannel();
    chan.assertQueue('Delivery mail');
    chan.consume(
      'Delivery mail',
      message => {
        const decodedMessage = JSON.parse(
          message.content.toString(),
        ) as AmqpNotificationDto;
        this.notificationsServices.sendMail(
          decodedMessage.tracking,
          decodedMessage.user.id,
        );
      },
      { noAck: true },
    );
  }
}
