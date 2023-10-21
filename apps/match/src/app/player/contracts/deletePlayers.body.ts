import { Command } from '@match-mate-api/nest-utils';
import { IsUUID } from 'class-validator';
import { DeletePlayersHandler } from '../handlers';
import { ApiHideProperty } from '@nestjs/swagger';

export class DeletePlayersBody extends Command<DeletePlayersHandler> {
  @ApiHideProperty()
  public tournamentId: string;

  @IsUUID(null, { each: true })
  public playerIds: string[];
}
