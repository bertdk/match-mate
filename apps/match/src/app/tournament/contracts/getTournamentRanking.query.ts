import { Command } from '@match-mate-api/nest-utils';
import { GetTournamentRankingHandler } from '../handlers';
import { ApiHideProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';

export class GetTournamentRankingQuery extends Command<GetTournamentRankingHandler> {
  @ApiHideProperty()
  public id: string;

  @IsNumber()
  @Max(50)
  @Min(1)
  public limit = 10;

  @IsNumber()
  public offset = 0;
}
