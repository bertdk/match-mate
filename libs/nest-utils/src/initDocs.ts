import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initDocs = (
  app: INestApplication,
  name: string,
  description: string
) => {
  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};
