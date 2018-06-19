import { NotificationsService } from 'services/notifications/notifications.service';
import { Controller, Post, Param, Body } from '@nestjs/common';
import { AmqpNotificationsService } from 'services/notifications/amqpNotifications.service';
import { TrackingDto } from 'services/notifications/dto/tracking.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly amqpNotificationService: AmqpNotificationsService,
  ) {}

  @Post('send/:userId')
  sendMail(@Param('userId') userId, @Body() tracking: TrackingDto) {
    return this.notificationsService.sendMail(location, userId);
  }
}
