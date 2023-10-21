import { Command, Nested } from '@match-mate-api/nest-utils';
import { IsNumber, IsString, Max, Min } from 'class-validator';
import { EditGameHandler } from '../handlers/editGame.handler';
import { ApiHideProperty } from '@nestjs/swagger';

class ScoreBody {
  @IsNumber()
  @Min(0)
  @Max(2000000000)
  public gamePoints: number;

  @IsString()
  public id: string;
}

export class EditGameBody extends Command<EditGameHandler> {
  @ApiHideProperty()
  public id: string;

  @Nested({ each: true })
  public scores: ScoreBody[];
}
