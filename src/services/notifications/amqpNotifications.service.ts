import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class AmqpNotificationsService {
  constructor() {
    this.initNotification()
      .then(() => {
        console.log('Notification queue ready !! ');
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
        console.log(message.content.toString());
      },
      { noAck: true },
    );
  }
}
