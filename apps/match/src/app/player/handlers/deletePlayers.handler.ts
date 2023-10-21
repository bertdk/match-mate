import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeletePlayersBody } from '../contracts';
import { EntityManager } from '@mikro-orm/core';
import { Player } from '@match-mate-api/db-utils';

@CommandHandler(DeletePlayersBody)
export class DeletePlayersHandler
  implements ICommandHandler<DeletePlayersBody, void>
{
  constructor(private em: EntityManager) {}

  async execute(input: DeletePlayersBody): Promise<void> {
    await this.em.nativeDelete(Player, {
      tournament: input.tournamentId,
      id: { $in: input.playerIds },
    });
  }
}
