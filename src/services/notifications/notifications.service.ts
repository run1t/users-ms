import { Injectable } from '@nestjs/common';

import * as nodemailer from 'nodemailer';

import { UsersService } from '../users/users.service';

@Injectable()
export class NotificationsService {
  // create reusable transporter object using the default SMTP transport
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usermicroimie@gmail.com',
      pass: 'usermicro',
    },
  });

  constructor(private usersService: UsersService) {}

  async sendMail(locationId, userId) {
    const user = await this.usersService.findOne(userId);

    const mailOptions = {
      from: '"Fred Foo 👻" <foo@example.com>',
      to: user.email,
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: '<b>Hello world?</b>',
    };

    return this.transporter.sendMail(mailOptions);
  }
}
