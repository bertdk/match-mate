import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetTournamentRankingQuery, TournamentRankingView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { ListView } from '@match-mate-api/nest-utils';
import { Player } from '@match-mate-api/db-utils';

@CommandHandler(GetTournamentRankingQuery)
export class GetTournamentRankingHandler
  implements
    ICommandHandler<GetTournamentRankingQuery, ListView<TournamentRankingView>>
{
  constructor(private em: EntityManager) {}

  async execute(
    input: GetTournamentRankingQuery
  ): Promise<ListView<TournamentRankingView>> {
    const count = await this.em.count(Player, { tournament: input.id });
    const items = await this.em
      .getRepository(Player)
      .getPlayersRanking(input.id, input.limit, input.offset);
    return {
      count,
      items: items.map((i) => ({ ...i, points: Number(i.points) })),
    };
  }
}
