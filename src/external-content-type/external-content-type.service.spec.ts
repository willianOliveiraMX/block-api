import { Test, TestingModule } from '@nestjs/testing';
import { ExternalContentTypeService } from './external-content-type.service';

describe('ExternalContentTypeService', () => {
  let service: ExternalContentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalContentTypeService],
    }).compile();

    service = module.get<ExternalContentTypeService>(ExternalContentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
