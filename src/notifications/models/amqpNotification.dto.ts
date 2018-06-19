import { TrackingDto } from './tracking.dto';

export class AmqpNotificationDto {
  user: {
    id: string;
  };

  tracking: TrackingDto;
}
