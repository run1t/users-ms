import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Controller('notifications')
export class NotificationsController {
  @Post('send/:user/:location')
  sendMail(@Param('location') location) {
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'usermicroimie@gmail.com',
          pass: 'usermicro',
        },
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'reunanln@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
      };
      x;
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {});
    });
  }

  @Post()
  create() {
    throw new Error('Not yet implemented');
  }

  @Delete()
  delete() {
    throw new Error('Not yet implemented');
  }

  @Get(':id')
  findOne() {
    throw new Error('Not yet implemented');
  }

  @Put(':id')
  update() {
    throw new Error('Not yet implemented');
  }
}
