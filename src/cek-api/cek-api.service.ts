import { Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CekApiService {
    getIpAddress(request: Request): string {
        return request.ip;
    }
}
