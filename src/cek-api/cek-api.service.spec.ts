import { Test, TestingModule } from '@nestjs/testing';
import { CekApiService } from './cek-api.service';

describe('CekApiService', () => {
  let service: CekApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CekApiService],
    }).compile();

    service = module.get<CekApiService>(CekApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
