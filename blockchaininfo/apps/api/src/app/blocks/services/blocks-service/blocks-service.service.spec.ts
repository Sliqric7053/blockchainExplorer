import { Test, TestingModule } from '@nestjs/testing';
import { BlocksServiceService } from './blocks-service.service';

describe('BlocksServiceService', () => {
  let service: BlocksServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocksServiceService]
    }).compile();

    service = module.get<BlocksServiceService>(BlocksServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
