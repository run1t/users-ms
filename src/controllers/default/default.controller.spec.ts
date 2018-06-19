import { Test, TestingModule } from '@nestjs/testing';
import { DefaultController } from './default.controller';

describe('Default Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DefaultController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DefaultController = module.get<DefaultController>(DefaultController);
    expect(controller).toBeDefined();
  });
});
