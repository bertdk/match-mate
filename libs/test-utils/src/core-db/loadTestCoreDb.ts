import { registerTsProject } from '@nx/js/src/internal';

const cleanupRegisteredPaths = process.argv.includes('--run') && registerTsProject('.', 'tsconfig.base.json');

import { MikroORM } from '@mikro-orm/core';
import { EntityManager, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { initOrm } from '../initOrm';
import { loadCoreDbBaseDataset, loadLargeMatchingDataset, loadUpsertedUserDataset } from './datasets';

const load = async function () {
  const orm = await connectToDb();
  const em = orm.em.fork();

  await clearDb(em, orm);
  await loadDatasets(em);

  console.log('Core db datasets loaded');
  await orm.close();

  cleanupRegisteredPaths();
};

async function loadDatasets(em: EntityManager) {
  await loadCoreDbBaseDataset(em);
  await loadLargeMatchingDataset(em);
  await loadUpsertedUserDataset(em);
}

async function clearDb(em, orm: MikroORM<PostgreSqlDriver>) {
  await em.execute(`DROP SCHEMA public CASCADE; CREATE SCHEMA public;`);
  await orm.getMigrator().up();
}

async function connectToDb() {
  try {
    return (await initOrm()) as MikroORM<PostgreSqlDriver>;
  } catch (error) {
    console.log('Error while connecting to the database', error);
    throw error;
  }
}

if (process.argv.includes('--run')) {
  void load();
}
