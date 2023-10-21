import { Command } from '@match-mate-api/nest-utils';
import { IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { CreateTournamentHandler } from '../handlers/createTournament.handler';

export class TournamentBody extends Command<CreateTournamentHandler> {
  @IsString()
  @Length(1, 255)
  public name: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  public pointsOnWin?: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  public pointsOnTie?: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  public pointsOnLoss?: number;
}
