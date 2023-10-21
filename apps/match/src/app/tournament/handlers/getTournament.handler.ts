import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetTournamentQuery, TournamentView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Tournament } from '@match-mate-api/db-utils';

@CommandHandler(GetTournamentQuery)
export class GetTournamentHandler
  implements ICommandHandler<GetTournamentQuery, TournamentView>
{
  constructor(private em: EntityManager) {}

  async execute(input: GetTournamentQuery): Promise<TournamentView> {
    const entity = await this.em.findOneOrFail(Tournament, { id: input.id });
    return entity;
  }
}
