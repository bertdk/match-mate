import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ApiErrorFilter,
  initDocs,
  initValidation,
} from '@match-mate-api/nest-utils';
import { AppModule } from './app/app.module';
import config from './config';
import { MikroORM } from '@mikro-orm/core';
import { captureException } from '@sentry/node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new ApiErrorFilter());

  initDocs(app, 'Match Mate API', 'API for Match Mate App');
  initValidation(app);
  await runMigrationsIfNeeded(app);

  const port = config.port;
  await app.listen(port);
  app.enableCors(config.cors);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/docs`);
}

async function runMigrationsIfNeeded(app: INestApplication) {
  try {
    console.log('DEBUG INFO | start running migrations');
    const orm = app.get(MikroORM);
    const migrator = orm.getMigrator();
    const migrations = await migrator.getPendingMigrations();
    await migrator.up();
    console.log(
      `DEBUG INFO | successfully ran ${migrations.length} migrations`,
    );
  } catch (e) {
    captureException(e);
    console.error('Failed to migrate db', e);
  }
}

bootstrap();
