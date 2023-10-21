import { Command } from '@match-mate-api/nest-utils';
import { IsNumber, Max, Min } from 'class-validator';
import { GetPlayersHandler } from '../handlers';
import { ApiHideProperty } from '@nestjs/swagger';

export class GetPlayersQuery extends Command<GetPlayersHandler> {
  @ApiHideProperty()
  public tournamentId: string;

  @IsNumber()
  @Max(50)
  @Min(1)
  public limit = 10;

  @IsNumber()
  public offset = 0;
}
