import { Injectable } from '@nestjs/common';

import * as nodemailer from 'nodemailer';

import { UsersService } from '../users/users.service';
import { TrackingDto } from './dto/tracking.dto';

@Injectable()
export class NotificationsService {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usermicroimie@gmail.com',
      pass: 'usermicro',
    },
  });

  constructor(private usersService: UsersService) {}

  async sendMail(tracking: TrackingDto, userId: string) {
    const user = await this.usersService.findOne(userId);

    const mailOptions = {
      from: '"Package Deliverer 📦" <package@deliverer.com>',
      to: user.email,
      subject: `Your package ${tracking.name} is now in ${tracking.location}`,
      text: `Hi ${user.name} \n Your package ${tracking.name} is now in ${
        tracking.location
      }`,
      html: `Hi ${user.name} <br> Your package ${tracking.name} is now in ${
        tracking.location
      }`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
