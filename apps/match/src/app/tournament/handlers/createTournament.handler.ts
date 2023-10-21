import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TournamentBody, TournamentView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Tournament } from '@match-mate-api/db-utils';

@CommandHandler(TournamentBody)
export class CreateTournamentHandler
  implements ICommandHandler<TournamentBody, TournamentView>
{
  constructor(private em: EntityManager) {}

  async execute(input: TournamentBody): Promise<TournamentView> {
    const entity = this.em.create(Tournament, input);
    await this.em.persistAndFlush(entity);
    return entity;
  }
}
