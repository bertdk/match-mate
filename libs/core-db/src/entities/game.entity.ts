import {
  Collection,
  Entity,
  Enum,
  ManyToOne,
  OneToMany,
} from '@mikro-orm/core';

import { Score } from './score.entity';
import { Base } from '../utils';
import { GameStatus } from '../types';
import { Tournament } from './tournament.entity';

@Entity()
export class Game extends Base<Game> {
  @Enum({ items: () => GameStatus, default: GameStatus.planned })
  public gameStatus = GameStatus.planned;

  @OneToMany(() => Score, (score) => score.game)
  public scores = new Collection<Score>(this);

  @ManyToOne(() => Tournament, { onDelete: 'cascade' })
  public tournament: Tournament;
}
