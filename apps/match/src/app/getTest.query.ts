import { Command } from '@match-mate-api/nest-utils';
import { IsString } from 'class-validator';
import { GetTestHandler } from './getTest.handler';

export class GetTestQuery extends Command<GetTestHandler> {
  @IsString()
  public language: string;
}
