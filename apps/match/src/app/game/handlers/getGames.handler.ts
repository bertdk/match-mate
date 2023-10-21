import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetGamesQuery, GameView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Game } from '@match-mate-api/db-utils';
import { ListView } from '@match-mate-api/nest-utils';

@CommandHandler(GetGamesQuery)
export class GetGamesHandler
  implements ICommandHandler<GetGamesQuery, ListView<GameView>>
{
  constructor(private em: EntityManager) {}

  async execute(input: GetGamesQuery): Promise<ListView<GameView>> {
    const [items, count] = await this.em.findAndCount(
      Game,
      {
        ...(input.tournamentId && { tournament: input.tournamentId }),
        ...(input.playerNameSearch && {
          scores: {
            player: { name: { $like: `%${input.playerNameSearch}%` } },
          },
        }),
        // from,
        // to,
      },
      {
        limit: input.limit,
        offset: input.offset,
        orderBy: { createdAt: 'asc' },
        populate: ['scores.player'],
      }
    );
    return { count, items: items.map((i) => i.toJSON()) };
  }
}
