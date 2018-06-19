import { Controller, Post, Param, Body } from '@nestjs/common';
import { NotificationsService } from './services/notifications.service';
import { AmqpNotificationsService } from './services/amqpNotifications.service';
import { TrackingDto } from './models/tracking.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly amqpNotificationService: AmqpNotificationsService,
  ) {}

  @Post('send/:userId')
  sendMail(@Param('userId') userId, @Body() tracking: TrackingDto) {
    return this.notificationsService.sendMail(tracking, userId);
  }
}
