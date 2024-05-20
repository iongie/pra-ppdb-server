import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppRoutingModule } from './app-routing.module';

@Module({
  imports: [
    AppRoutingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'browser'),
      exclude: ['/api/(.*)'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
