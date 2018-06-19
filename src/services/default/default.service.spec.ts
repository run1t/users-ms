import { Test, TestingModule } from '@nestjs/testing';
import { DefaultService } from './default.service';

describe('DefaultService', () => {
  let service: DefaultService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultService],
    }).compile();
    service = module.get<DefaultService>(DefaultService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
