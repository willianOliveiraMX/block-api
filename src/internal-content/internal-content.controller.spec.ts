import { Test, TestingModule } from '@nestjs/testing';
import { InternalContentController } from './internal-content.controller';

describe('InternalContentController', () => {
  let controller: InternalContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternalContentController],
    }).compile();

    controller = module.get<InternalContentController>(InternalContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
