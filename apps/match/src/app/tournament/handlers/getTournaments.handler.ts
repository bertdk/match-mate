import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetTournamentsQuery, TournamentView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Tournament } from '@match-mate-api/db-utils';
import { ListView } from '@match-mate-api/nest-utils';

@CommandHandler(GetTournamentsQuery)
export class GetTournamentsHandler
  implements ICommandHandler<GetTournamentsQuery, ListView<TournamentView>>
{
  constructor(private em: EntityManager) {}

  async execute(input: GetTournamentsQuery): Promise<ListView<TournamentView>> {
    const [items, count] = await this.em.findAndCount(
      Tournament,
      {},
      { limit: input.limit, offset: input.offset, orderBy: { name: 'asc' } }
    );
    return { count, items };
  }
}
