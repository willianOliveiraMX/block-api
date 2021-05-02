import { Test, TestingModule } from '@nestjs/testing';
import { InternalContentService } from './internal-content.service';

describe('InternalContentService', () => {
  let service: InternalContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalContentService],
    }).compile();

    service = module.get<InternalContentService>(InternalContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
