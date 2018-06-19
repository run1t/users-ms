import { Injectable, Logger } from '@nestjs/common';
import * as amqp from 'amqplib';
import { NotificationsService } from './notifications.service';

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
    chan.assertQueue('hello');
    chan.consume(
      'hello',
      message => {
        this.notificationsServices.sendMail('Yop', 'user');
      },
      { noAck: true },
    );
  }
}
