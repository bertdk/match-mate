import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetPlayersQuery, PlayerView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Player } from '@match-mate-api/db-utils';
import { ListView } from '@match-mate-api/nest-utils';

@CommandHandler(GetPlayersQuery)
export class GetPlayersHandler
  implements ICommandHandler<GetPlayersQuery, ListView<PlayerView>>
{
  constructor(private em: EntityManager) {}

  async execute(input: GetPlayersQuery): Promise<ListView<PlayerView>> {
    const [items, count] = await this.em.findAndCount(
      Player,
      { tournament: input.tournamentId },
      { limit: input.limit, offset: input.offset, orderBy: { name: 'asc' } }
    );
    return { count, items };
  }
}
