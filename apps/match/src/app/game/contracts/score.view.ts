import { Nested } from '@match-mate-api/core-utils';
import { IsNumber, IsString } from 'class-validator';
import { PlayerView } from '../../player/contracts';

export class ScoreView {
  @IsString()
  public id: string;

  @IsNumber()
  public gamePoints: number;

  @Nested()
  public player: PlayerView;
}
