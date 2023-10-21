import { Command, Nested } from '@match-mate-api/nest-utils';
import { IsOptional, IsString } from 'class-validator';
import { EditTournamentHandler } from '../handlers/editTournament.handler';
import { ApiHideProperty } from '@nestjs/swagger';
import { PlayerBody } from '../../player/contracts';

export class EditTournamentBody extends Command<EditTournamentHandler> {
  @ApiHideProperty()
  public id: string;

  @IsString()
  @IsOptional()
  public name?: string;

  @Nested({ each: true })
  public players?: PlayerBody[];
}
