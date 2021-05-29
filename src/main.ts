import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const logger = new Logger();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  logger.log(`Server is running in ${ await app.getUrl() }`);
}
bootstrap();
