import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Get()
  findAll() {
    throw new Error('Not yet implemented');
  }

  @Post()
  create() {
    throw new Error('Not yet implemented');
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
