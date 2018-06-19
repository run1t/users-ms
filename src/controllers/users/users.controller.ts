import { UsersService } from './../../services/users/users.service';
import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user) {
    return this.usersService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.usersService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() update) {
    return this.usersService.update(id, update);
  }
}
