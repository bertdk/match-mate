import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetGameQuery, GameView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Game } from '@match-mate-api/db-utils';

@CommandHandler(GetGameQuery)
export class GetGameHandler implements ICommandHandler<GetGameQuery, GameView> {
  constructor(private em: EntityManager) {}

  async execute(input: GetGameQuery): Promise<GameView> {
    const entity = await this.em.findOneOrFail(
      Game,
      { id: input.id },
      { populate: ['scores.player'] }
    );
    return entity.toObject();
  }
}
