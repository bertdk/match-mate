import { Logger, Module } from '@nestjs/common';
import { importFilesByGlob } from '@match-mate-api/nest-utils';
import { CqrsModule } from '@nestjs/cqrs';
import ormConfig from '../orm.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

const commandHandlers = importFilesByGlob(
  require.context('', true, /handler\.ts$/),
);
Logger.log(
  `Loading ${commandHandlers.length} handlers: ${commandHandlers
    .map((h) => h.name)
    .join(', ')}`,
);

const controllers = importFilesByGlob(
  require.context('', true, /\.controller\.ts$/),
);
Logger.log(
  `Loading ${controllers.length} controllers: ${controllers
    .map((h) => h.name)
    .join(', ')}`,
);

@Module({
  imports: [
    CqrsModule,
    MikroOrmModule.forRoot({
      ...ormConfig,
      tsNode: false,
    }),
  ],
  controllers: controllers,
  providers: commandHandlers,
})
export class AppModule {}
