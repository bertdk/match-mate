import { Nested } from '@match-mate-api/core-utils';
import { makeListView } from '@match-mate-api/nest-utils';
import { IsUUID } from 'class-validator';
import { ScoreView } from './score.view';

export class GameView {
  @IsUUID()
  public id: string;

  @Nested({ each: true }, ScoreView)
  public scores: ScoreView[];
}

export const ListGamesView = makeListView(GameView);
