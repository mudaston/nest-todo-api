import { NestFactory } from '@nestjs/core';

import { AppModule } from '@app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.PORT);

  await app.listen(PORT || 3000);
}
bootstrap();
