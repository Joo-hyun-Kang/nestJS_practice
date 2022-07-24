import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from 'src/messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  const port = process.env.PORT ?? 3000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
