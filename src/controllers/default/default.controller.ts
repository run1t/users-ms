import { DefaultService } from './../../services/default/default.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class DefaultController {
  constructor(
    private readonly defaultService: DefaultService,
  ) { }

  @Get()
  root() {
    return this.defaultService.root();
  }
}
