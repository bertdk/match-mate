import { Controller, Get, Injectable, Query } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '@match-mate-api/nest-utils';
import { GetTestQuery } from 'apps/match/src/app/getTest.query';
import { ListAttributeView } from './getTest.view';

@Controller()
@Injectable()
@ApiTags('app')
export class AppController extends BaseController {
  @Get()
  @ApiResponse({ type: ListAttributeView })
  @ApiOperation({ summary: 'Get data' })
  getData(@Query() query: GetTestQuery) {
    return this.execute(query);
  }
}
