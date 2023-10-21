import { Command } from '@match-mate-api/nest-utils';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { GetGamesHandler } from '../handlers';

export class GetGamesQuery extends Command<GetGamesHandler> {
  @IsUUID()
  @IsOptional()
  public tournamentId?: string;

  @IsString()
  @IsOptional()
  public playerNameSearch?: string;

  @IsDateString()
  @IsOptional()
  public from?: Date;

  @IsDateString()
  @IsOptional()
  public to?: Date;

  @IsNumber()
  @Max(50)
  @Min(1)
  public limit = 10;

  @IsNumber()
  public offset = 0;
}
