import { Module } from '@nestjs/common';

import { UsersModule } from 'users/users.module';
import { NotificationsModule } from 'notifications/notification.module';

@Module({
  imports: [UsersModule, NotificationsModule],
})
export class AppModule {}
