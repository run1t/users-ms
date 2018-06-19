import { NotificationsService } from './../../services/notifications/notifications.service';
import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { AmqpNotificationsService } from 'services/notifications/amqpNotifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly amqpNotificationService: AmqpNotificationsService,
  ) {}

  @Post('send/:userId/:locationId')
  sendMail(@Param('locationId') locationId, @Param('userId') userId) {
    return this.notificationsService.sendMail(locationId, userId);
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
