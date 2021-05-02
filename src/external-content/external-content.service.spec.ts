import { Test, TestingModule } from '@nestjs/testing';
import { ExternalContentService } from './external-content.service';

describe('ExternalContentService', () => {
  let service: ExternalContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalContentService],
    }).compile();

    service = module.get<ExternalContentService>(ExternalContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
