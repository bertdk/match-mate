import { Options } from '@mikro-orm/core';
import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { NotFoundException } from '@nestjs/common';
import path from 'path';

export const noEntityFoundError = function (entityName: string): Error {
  throw new NotFoundException(`entityNotFound`, `${entityName} NotFound`);
};

const migrationPath = path.join(
  __dirname,
  '../../..',
  'apps',
  'matching-service',
  'src',
  'migrations'
);
const ormConfig = {
  migrations: {
    path: migrationPath,
    tableName: 'migrations',
    transactional: true,
    pattern: /^[\w-]+\d+\.(ts|js)$/,
    disableForeignKeys: false,
    emit: 'js',
  },
  type: 'postgresql',
  tsNode: true,
  entities: [path.join(__dirname, '..', '..', 'core-db', '**', '*.entity.ts')],
  entitiesTs: [
    path.join(__dirname, '..', '..', 'core-db', '**', '*.entity.ts'),
  ],
  user: 'root',
  password: 'root',
  dbName: 'MATCH_MATE',
  host: 'localhost',
  port: 5432,
  ssl: false,
  findOneOrFailHandler: noEntityFoundError,
} as Options<PostgreSqlDriver>;

export const initOrm = async () => {
  return await MikroORM.init(ormConfig);
};
