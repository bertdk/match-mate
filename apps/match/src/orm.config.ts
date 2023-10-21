import { importClasses, importFilesByGlob } from '@match-mate-api/core-utils';
import { Options } from '@mikro-orm/core/utils/Configuration';
import { PostgreSqlDriver } from '@mikro-orm/postgresql/PostgreSqlDriver';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import path from 'path';
import config from './config';

const getEntities = (): unknown[] => {
  if (process.env.WEBPACK) {
    const extracted = require.context(
      `../../../libs/core-db`,
      true,
      /\.entity\.ts$/
    );
    return importFilesByGlob(extracted);
  }

  return importClasses([`${__dirname}/../../../libs/core-db/**/*.entity.ts`]);
};

export const noEntityFoundError = function (entityName: string): Error {
  throw new NotFoundException(`entityNotFound`, `${entityName} NotFound`);
};

export default {
  type: 'postgresql',
  tsNode: true,
  entities: getEntities(),
  discovery: { disableDynamicFileAccess: true },
  user: config.db.user,
  password: config.db.password,
  dbName: config.db.dbName,
  host: config.db.host,
  port: config.db.port,
  driverOptions: { connection: { ssl: config.db.ssl } },
  findOneOrFailHandler: noEntityFoundError,
  migrations: {
    path: path.join(__dirname, 'migrations'),
    tableName: 'migrations',
    transactional: true,
    pattern: /^[\w-]+\d+\.(ts|js)$/,
    disableForeignKeys: false,
    emit: 'js',
  },
} as Options<PostgreSqlDriver>;
