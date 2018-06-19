import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      0, 1, 2, 3,
    ];
  }
}
