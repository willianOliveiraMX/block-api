import { Test, TestingModule } from '@nestjs/testing';
import { ExternalContentTypeController } from './external-content-type.controller';

describe('ExternalContentTypeController', () => {
  let controller: ExternalContentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalContentTypeController],
    }).compile();

    controller = module.get<ExternalContentTypeController>(ExternalContentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
