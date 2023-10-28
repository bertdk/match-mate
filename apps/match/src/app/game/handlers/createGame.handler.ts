import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GameBody, GameView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Game, Score, Tournament } from '@match-mate-api/db-utils';

@CommandHandler(GameBody)
export class CreateGameHandler implements ICommandHandler<GameBody, GameView> {
  constructor(private em: EntityManager) {}

  async execute(input: GameBody): Promise<GameView> {
    const { pointsOnWin, pointsOnTie, pointsOnLoss } =
      await this.em.findOneOrFail(Tournament, input.tournamentId);
    const entity = this.em.create(Game, { tournament: input.tournamentId });
    const scores = input.scores.map((score) => score.gamePoints);

    input.scores.forEach((score) => {
      const newScore = this.em.create(Score, {
        player: score.playerId,
        gamePoints: score.gamePoints,
        game: entity.id,
      });
      if (score.gamePoints === Math.max(...scores)) {
        newScore.rakingPoints = pointsOnWin;
      } else if (score.gamePoints === Math.min(...scores)) {
        newScore.rakingPoints = pointsOnLoss;
      } else {
        newScore.rakingPoints = pointsOnTie;
      }
      this.em.persist(newScore);
    });
    await this.em.persistAndFlush(entity);
    return entity.toJSON();
  }
}
