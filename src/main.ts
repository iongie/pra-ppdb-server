import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', true)
  app.enableCors();
  // app.use(csurf());
  app.use(helmet({
    noSniff: true,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
    dnsPrefetchControl: true,
    frameguard: true,
    hidePoweredBy: true,
    hsts: false,
    ieNoOpen: true,
    originAgentCluster: true,
    referrerPolicy: true,
    xXssProtection: true,
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'default-src': [
          `'self'`, 
          '*.gstatic.com',
          "data:", 
          '*.tangerangselatankota.go.id',
          '*.googleapis.com',
          '*.clouddiskominfo.tangerangselatankota.go.id/'
        ],
        'img-src': [
          `'self'`, 
          `data:`, 
          '*.googletagmanager.com', 
          '*.googleapis.com',
          '*.gstatic.com',
          '*.clouddiskominfo.tangerangselatankota.go.id/',
          '*.googletagmanager.com',
          '*.google-analytics.com'
        ],
        'script-src': [
          `'self'`, 
          '*.google.com', 
          '*.gstatic.com',
          '*.googleapis.com',
          '*.clouddiskominfo.tangerangselatankota.go.id/',
          '*.googletagmanager.com',
          '*.google-analytics.com'
        ],
        'manifest-src': [`'self'`],
        'frame-src': [
          `'self'`,
          '*.google.com',
          '*.recaptcha.google.com',
          '*.gstatic.com',
          '*.google.com',
          '*.youtube.com',
          '*.clouddiskominfo.tangerangselatankota.go.id/',
          '*.googletagmanager.com',
          '*.google-analytics.com'
        ], 
        'style-src': [
          `'self'`, 
          `'unsafe-inline'`, 
          '*.googleapis.com',
          '*.clouddiskominfo.tangerangselatankota.go.id/',
          '*.googletagmanager.com',
          '*.google-analytics.com'
        ],
        'script-src-attr': [
           `self`, 
           `'unsafe-inline'`,
           '*.clouddiskominfo.tangerangselatankota.go.id/',
           '*.googletagmanager.com',
           '*.google-analytics.com'
        ]
      },
    },

  }));
  await app.listen(3100);
}
bootstrap();
