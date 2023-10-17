import { MikroORM } from '@mikro-orm/core';
import { EntityManager, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TestDbDataService } from './testDBDataService';

export abstract class TestBase {
  protected testDbService: TestDbDataService;

  constructor() {}
  public setTestDbService(orm: MikroORM<PostgreSqlDriver>) {
    this.testDbService = new TestDbDataService(orm);
  }

  public async beforeAll() {}

  public async beforeEach(): Promise<EntityManager<PostgreSqlDriver>> {
    return this.testDbService.startTestTransaction();
  }
  public async afterEach(): Promise<void> {
    await this.testDbService?.rollBackTestTransaction();
  }
}
