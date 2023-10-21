import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EditTournamentBody, TournamentView } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Player, Tournament } from '@match-mate-api/db-utils';

@CommandHandler(EditTournamentBody)
export class EditTournamentHandler
  implements ICommandHandler<EditTournamentBody, TournamentView>
{
  constructor(private em: EntityManager) {}

  async execute(input: EditTournamentBody): Promise<TournamentView> {
    const entity = await this.em.findOneOrFail(Tournament, input.id, {
      populate: ['players'],
    });
    const { players, ...properties } = input;
    entity.assign(properties);

    players.forEach((player) => {
      const playerEntity = entity.players
        .getItems()
        .find((p) => p.id === player.id);
      if (playerEntity) {
        playerEntity.name = player.name;
      } else {
        this.em.create(Player, { ...player, tournament: entity });
        this.em.persist(player);
      }
    });

    await this.em.flush();
    return entity;
  }
}
