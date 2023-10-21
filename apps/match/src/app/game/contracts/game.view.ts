import { Nested } from '@match-mate-api/core-utils';
import { makeListView } from '@match-mate-api/nest-utils';
import { Exclude, Expose } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { ScoreView } from './score.view';

@Exclude()
export class GameView {
  @Expose()
  @IsUUID()
  public id: string;

  @Expose()
  @Nested({ each: true }, ScoreView)
  public scores: ScoreView[];
}

export const ListGamesView = makeListView(GameView);
