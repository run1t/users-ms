import { Injectable } from '@nestjs/common';

@Injectable()
export class DefaultService {
  root() {
    return 'Welcome to Users Microservice !';
  }
}
