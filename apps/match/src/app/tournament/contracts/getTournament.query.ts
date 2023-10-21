import { Command } from '@match-mate-api/nest-utils';
import { GetTournamentHandler } from '../handlers';
import { ApiHideProperty } from '@nestjs/swagger';

export class GetTournamentQuery extends Command<GetTournamentHandler> {
  @ApiHideProperty()
  public id: string;
}
