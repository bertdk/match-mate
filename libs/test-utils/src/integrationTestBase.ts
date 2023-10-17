import supertest from 'supertest';
import { MockedServiceWorker, type Options as ServiceWorkerOptions } from './mocks/mockedServiceWorker';
import { TestDbDataService } from './testDBDataService';
import { MikroORM } from '@mikro-orm/postgresql';
import { initOrm } from './initOrm';

type Options = {
  serviceWorker?: ServiceWorkerOptions;
};

export class IntegrationTestBase {
  private request: supertest.SuperTest<supertest.Test>;
  private testDbDataService: TestDbDataService;
  readonly #serviceWorker: MockedServiceWorker;
  private orm: MikroORM;

  constructor(options?: Options) {
    this.#serviceWorker = new MockedServiceWorker(options?.serviceWorker);
  }

  get serviceWorker() {
    return this.#serviceWorker;
  }

  public async before() {
    this.serviceWorker.setupMockedServices();
  }

  public async beforeEach() {
    return await this.testDbDataService.startTestTransaction();
  }

  public async afterEach() {
    this.serviceWorker.resetMockedServices();
    await this.testDbDataService.rollBackTestTransaction();
  }

  public async after() {
    this.serviceWorker.closeMockedServices();
  }

  public async getRequestForAllRouters() {
    // TODO: setup nest?
    if (!this.orm) {
      this.orm = await initOrm();
      this.testDbDataService = new TestDbDataService(this.orm);
    }

    // return request;
    return this.orm;
  }
}
