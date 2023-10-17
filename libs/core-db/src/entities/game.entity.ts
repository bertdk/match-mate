import { Collection, Entity, Enum, OneToMany } from '@mikro-orm/core';

import { Score } from './score.entity';
import { Base } from '../utils';
import { GameStatus } from '../types';

@Entity()
export class Game extends Base<Game> {
  @Enum({ items: () => GameStatus, default: GameStatus.planned })
  public gamePoints = GameStatus.planned;

  @OneToMany(() => Score, (score) => score.game)
  public scores = new Collection<Score>(this);
}
