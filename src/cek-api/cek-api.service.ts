import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CekApiService {
    getIpAddress(request: Request) {
        let ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
        if (typeof ip === 'string') {
          ip = ip.split(',')[0]; // Jika ada beberapa alamat IP, ambil yang pertama
          if (ip.includes('::ffff:')) {
            ip = ip.split('::ffff:')[1]; // Mengubah format IPv6 ke IPv4 jika perlu
          }
        }
        return ip;
    }
}
