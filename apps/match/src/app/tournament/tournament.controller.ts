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
  EditTournamentBody,
  GetTournamentQuery,
  GetTournamentRankingQuery,
  GetTournamentsQuery,
  ListTournamentsView,
  ListTournamentRankingView,
  TournamentBody,
} from './contracts';

@Controller('/tournaments')
@Injectable()
@ApiTags('Tournament')
export class TournamentController extends BaseController {
  @Get()
  @ApiResponse({ type: ListTournamentsView })
  @ApiOperation({ summary: 'Get all tournaments' })
  getList(@Query() query: GetTournamentsQuery) {
    return this.execute(query);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a tournament' })
  getOne(
    @Query() query: GetTournamentQuery,
    @Param('id') tournamentId: string
  ) {
    query.id = tournamentId;
    return this.execute(query);
  }

  @Get('/:id/ranking')
  @ApiResponse({ type: ListTournamentRankingView })
  @ApiOperation({ summary: 'Get the ranking of a tournament' })
  getRanking(
    @Query() query: GetTournamentRankingQuery,
    @Param('id') tournamentId: string
  ) {
    query.id = tournamentId;
    return this.execute(query);
  }

  @Post()
  @ApiOperation({ summary: 'Create a tournament' })
  create(@Body() body: TournamentBody) {
    return this.execute(body);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update a tournament' })
  edit(@Body() body: EditTournamentBody, @Param('id') tournamentId: string) {
    body.id = tournamentId;
    return this.execute(body);
  }
}
