import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TestBase } from './testBase';
import { initOrm } from './initOrm';

export class HandlerTestBase extends TestBase {
  public orm!: MikroORM<PostgreSqlDriver>;

  public createConnection = async () => {
    try {
      this.orm = (await initOrm()) as MikroORM<PostgreSqlDriver>;
    } catch (error) {
      console.log('Error while connecting to the database', error);
      throw error;
    }
    this.setTestDbService(this.orm);
  };

  public after = async () => {
    await this.closeConnection();
  };

  public closeConnection = async () => {
    try {
      await this.orm?.close();
    } catch (error) {
      console.log('Error while closing the connection to the database', error);
      throw error;
    }
  };

  public static before = async () => {
    const base = new HandlerTestBase();
    await base.createConnection();
    await base.beforeAll();
    return { base };
  };
}
