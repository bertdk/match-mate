import { Controller, Get, Injectable, Param, Query } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '@match-mate-api/nest-utils';
import { GetPlayersQuery, ListPlayersView } from './contracts';

@Controller('/players')
@Injectable()
@ApiTags('Player')
export class PlayerController extends BaseController {
  @Get('/tournaments/:id')
  @ApiResponse({ type: ListPlayersView })
  @ApiOperation({ summary: 'Get all players of a tournament' })
  getList(@Query() query: GetPlayersQuery, @Param('id') tournamentId: string) {
    query.tournamentId = tournamentId;
    return this.execute(query);
  }
}
