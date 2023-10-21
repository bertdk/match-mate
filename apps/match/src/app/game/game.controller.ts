import {
  Body,
  Controller,
  Get,
  Injectable,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '@match-mate-api/nest-utils';
import {
  EditGameBody,
  GetGameQuery,
  GetGamesQuery,
  ListGamesView,
  GameBody,
} from './contracts';

@Controller('/games')
@Injectable()
@ApiTags('Game')
export class GameController extends BaseController {
  @Get()
  @ApiResponse({ type: ListGamesView })
  @ApiOperation({ summary: 'Get all games' })
  getList(@Query() query: GetGamesQuery) {
    return this.execute(query);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a game' })
  getOne(@Query() query: GetGameQuery, @Param('id') gameId: string) {
    query.id = gameId;
    return this.execute(query);
  }

  @Post('/tournaments/:id')
  @ApiOperation({ summary: 'Create a game in a tournament' })
  create(@Body() body: GameBody, @Param('id') tournamentId: string) {
    body.tournamentId = tournamentId;
    return this.execute(body);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a game' })
  edit(@Body() body: EditGameBody, @Param('id') gameId: string) {
    body.id = gameId;
    return this.execute(body);
  }
}
