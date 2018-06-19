import { TrackingDto } from './tracking.dto';

export class AmqpNotificationDto {
  user: {
    id: number;
  };

  tracking: TrackingDto;
}
