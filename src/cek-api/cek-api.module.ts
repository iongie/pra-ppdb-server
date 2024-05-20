import { Module } from '@nestjs/common';
import { CekApiController } from './cek-api.controller';
import { CekApiService } from './cek-api.service';

@Module({
  controllers: [CekApiController],
  providers: [CekApiService]
})
export class CekApiModule {}
