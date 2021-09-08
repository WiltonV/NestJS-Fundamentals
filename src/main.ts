import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove os excedentes da request
      transform: true, // Executa transformação automática dos tipos de dados
      forbidNonWhitelisted: true, // Não permite que sejam enviados itens a mais na request
    }),
  );
  await app.listen(3333);
}

bootstrap();
