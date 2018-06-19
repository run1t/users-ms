import { Injectable } from '@nestjs/common';

import * as nodemailer from 'nodemailer';
import { UsersService } from 'users/users.service';
import { TrackingDto } from '../models/tracking.dto';
import { UserModel } from 'users/models/users.model';
import { User } from 'users/models/users.interface';

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
      text: `Hi ${user.firstname} \n Your package ${tracking.name} is now in ${
        tracking.location
      }`,
      html: `Hi ${user.firstname} <br> Your package ${
        tracking.name
      } is now in ${tracking.location}`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
