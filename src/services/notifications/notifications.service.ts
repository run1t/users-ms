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

  constructor(
    private usersService: UsersService,
  ) { }

  async sendMail(locationId, userId) {
    const user = await this.usersService.findOne(userId);
    nodemailer.createTestAccount((err, account) => {

      // setup email data with unicode symbols
      const mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: user.email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
      };

      // send mail with defined transport object
      return this.transporter.sendMail(mailOptions);
    });
  }
}
