import { Command } from '@match-mate-api/nest-utils';
import { CreateGameHandler } from '../handlers/createGame.handler';
import { ApiHideProperty } from '@nestjs/swagger';
import { Nested } from '@match-mate-api/core-utils';
import { IsNumber, IsString, Max, Min } from 'class-validator';

class ScoreBody {
  @IsNumber()
  @Min(0)
  @Max(2000000000)
  public gamePoints: number;

  @IsString()
  public playerId: string;
}

export class GameBody extends Command<CreateGameHandler> {
  @ApiHideProperty()
  public tournamentId: string;

  @Nested({ each: true })
  public scores: ScoreBody[];
}
