import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv/config');

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(parseFloat(process.env.PORT) || 3000);
  } catch (error) {
    throw new Error(error)
  }
}
bootstrap();
