import { Controller, Get, Req } from '@nestjs/common';
import { CekApiService } from './cek-api.service';
import { Request } from 'express';

@Controller('cek-ip')
export class CekApiController {
    constructor(
        private cekApi: CekApiService
    ){}

    @Get()
    getCekIP(@Req() request: Request) {
        const ipAddress = this.cekApi.getIpAddress(request);
        return {
            success: 'ok',
            data: {
                ip: ipAddress
            }
        }
      }
}
