import { Test, TestingModule } from '@nestjs/testing';
import { ExternalContentController } from './external-content.controller';

describe('ExternalContentController', () => {
  let controller: ExternalContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalContentController],
    }).compile();

    controller = module.get<ExternalContentController>(ExternalContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
