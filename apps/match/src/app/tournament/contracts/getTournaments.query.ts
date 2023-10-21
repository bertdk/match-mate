import { Command } from '@match-mate-api/nest-utils';
import { IsNumber, Max, Min } from 'class-validator';
import { GetTournamentsHandler } from '../handlers';

export class GetTournamentsQuery extends Command<GetTournamentsHandler> {
  @IsNumber()
  @Max(50)
  @Min(1)
  public limit = 10;

  @IsNumber()
  public offset = 0;
}
