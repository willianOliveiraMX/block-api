import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
require('dotenv/config');

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(helmet());
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'application/json, text/plain, */*',
    });
    await app.listen(parseFloat(process.env.PORT) || 5000);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
