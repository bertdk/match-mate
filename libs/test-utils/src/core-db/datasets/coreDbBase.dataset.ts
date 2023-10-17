/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityManager } from '@mikro-orm/postgresql';

export async function loadCoreDbBaseDataset(em: EntityManager) {
  await em.flush();
}
