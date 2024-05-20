import { Test, TestingModule } from '@nestjs/testing';
import { CekApiController } from './cek-api.controller';

describe('CekApiController', () => {
  let controller: CekApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CekApiController],
    }).compile();

    controller = module.get<CekApiController>(CekApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
