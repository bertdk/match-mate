import { Nested } from '@match-mate-api/core-utils';
import { IsNumber, IsString } from 'class-validator';
import { PlayerView } from '../../player/contracts';
import { Exclude, Expose } from 'class-transformer';

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
