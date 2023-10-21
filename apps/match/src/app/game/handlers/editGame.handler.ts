import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EditGameBody, GameView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Game } from '@match-mate-api/db-utils';

@CommandHandler(EditGameBody)
export class EditGameHandler
  implements ICommandHandler<EditGameBody, GameView>
{
  constructor(private em: EntityManager) {}

  async execute(input: EditGameBody): Promise<GameView> {
    const entity = await this.em.findOneOrFail(Game, input.id, {
      populate: ['scores.player'],
    });

    input.scores.forEach((score) => {
      const scoreEntity = entity.scores
        .getItems()
        .find((s) => s.id === score.id);
      if (scoreEntity) {
        scoreEntity.gamePoints = score.gamePoints;
      }
    });

    await this.em.flush();
    return entity.toJSON();
  }
}
