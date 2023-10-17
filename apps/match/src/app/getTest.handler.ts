import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EntityManager } from '@mikro-orm/core';
import { ListView } from '@match-mate-api/nest-utils';
import { GetTestQuery } from 'apps/match/src/app/getTest.query';
import { GetTestView } from 'apps/match/src/app/getTest.view';
import { Player } from '@match-mate-api/db-utils';

@CommandHandler(GetTestQuery)
export class GetTestHandler
  implements ICommandHandler<GetTestQuery, ListView<GetTestView>>
{
  constructor(private em: EntityManager) {}

  async execute(input: GetTestQuery): Promise<ListView<GetTestView>> {
    const x: Player = null;
    return { count: 1, items: [{ name: input.language ?? 'test' }] };
  }
}
