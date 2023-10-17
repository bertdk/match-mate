import { IsolationLevel, MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver, SqlEntityManager } from '@mikro-orm/postgresql';

let transactionalTestEm: SqlEntityManager;

/**
 * We need to have an implicit reference to this from all apps using the core db.
 * Since we can't use an import, otherwise the test-utils will be included in the bundle.
 * This is why we use global
 **/
global.getTransactionalTestEm = () => transactionalTestEm;

export class TestDbDataService {
  private orm: MikroORM<PostgreSqlDriver>;
  private em: SqlEntityManager<PostgreSqlDriver>;
  public isTransactionsTemporarilyDisabled = false;

  constructor(orm: MikroORM<PostgreSqlDriver>) {
    this.orm = orm;
  }

  public async startTestTransaction() {
    this.em = this.orm.em.fork();

    if (!this.isTransactionsTemporarilyDisabled) {
      await this.em.begin({
        ctx: this.orm.em.getTransactionContext(),
        isolationLevel: IsolationLevel.READ_UNCOMMITTED,
      });
    }

    transactionalTestEm = this.em;
    return this.em;
  }

  public async rollBackTestTransaction() {
    if (!this.isTransactionsTemporarilyDisabled) {
      await this.em?.rollback();
    }
  }
}
