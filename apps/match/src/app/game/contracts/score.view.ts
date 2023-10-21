import { Nested } from '@match-mate-api/core-utils';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { PlayerView } from '../../player/contracts';

@Exclude()
export class ScoreView {
  @Expose()
  @IsString()
  public id: string;

  @Expose()
  @IsNumber()
  public gamePoints: number;

  @Expose()
  @Nested()
  public player: PlayerView;
}
