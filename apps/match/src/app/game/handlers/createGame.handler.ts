import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GameBody, GameView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Game, Score } from '@match-mate-api/db-utils';

@CommandHandler(GameBody)
export class CreateGameHandler implements ICommandHandler<GameBody, GameView> {
  constructor(private em: EntityManager) {}

  async execute(input: GameBody): Promise<GameView> {
    const entity = this.em.create(Game, { tournament: input.tournamentId });
    input.scores.forEach((score) => {
      const newScore = this.em.create(Score, {
        player: score.playerId,
        gamePoints: score.gamePoints,
        game: entity.id,
      });
      this.em.persist(newScore);
    });
    await this.em.persistAndFlush(entity);
    return entity.toJSON();
  }
}
