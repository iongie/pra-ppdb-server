import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
          '*.googleapis.com'
        ],
        'img-src': [
          `'self'`, 
          `data:`, 
          '*.googletagmanager.com', 
          '*.googleapis.com',
          '*.gstatic.com',
        ],
        'script-src': [
          `'self'`, 
          '*.google.com', 
          '*.gstatic.com',
          '*.googleapis.com'
        ],
        'manifest-src': [`'self'`],
        'frame-src': [
          `'self'`,
          '*.google.com',
          '*.recaptcha.google.com',
          '*.gstatic.com',
          '*.google.com',
          '*.youtube.com',
        ], 
        'style-src': [
          `'self'`, 
          `'unsafe-inline'`, 
          '*.googleapis.com'
        ],
        'script-src-attr': [
           `self`, 
           `'unsafe-inline'`
        ]
      },
    },

  }));
  await app.listen(3100);
}
bootstrap();