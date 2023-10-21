import { Command } from '@match-mate-api/nest-utils';
import { GetGameHandler } from '../handlers';
import { ApiHideProperty } from '@nestjs/swagger';

export class GetGameQuery extends Command<GetGameHandler> {
  @ApiHideProperty()
  public id: string;
}
