import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Query,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '@match-mate-api/nest-utils';
import {
  DeletePlayersBody,
  GetPlayersQuery,
  ListPlayersView,
} from './contracts';

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

  @Delete('/tournaments/:id')
  @ApiOperation({ summary: 'Delete selected players of a tournament' })
  delete(@Body() body: DeletePlayersBody, @Param('id') tournamentId: string) {
    body.tournamentId = tournamentId;
    return this.execute(body);
  }
}
