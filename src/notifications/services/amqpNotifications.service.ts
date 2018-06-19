import { Injectable, Logger } from '@nestjs/common';
import * as amqp from 'amqplib';
import { NotificationsService } from './notifications.service';
import { AmqpNotificationDto } from '../models/amqpNotification.dto';

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
        Logger.error(
          'Amqp Notification is dead',
          err,
          'AmqpNotificationService',
        );
      });
  }

  async initNotification() {
    const connection = await amqp.connect('amqp://rabbitmq');
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
