import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';

import { Base } from '../utils';
import { Score } from './score.entity';
import { Tournament } from './tournament.entity';
import { PlayerRepository } from '../repositories/player.repository';

@Entity({ customRepository: () => PlayerRepository })
export class Player extends Base<Player> {
  [EntityRepositoryType]?: PlayerRepository;

  @Property()
  public name: string;

  @ManyToOne(() => Tournament, { onDelete: 'cascade' })
  public tournament: Tournament;

  @OneToMany(() => Score, (score) => score.player)
  public scores = new Collection<Score>(this);
}
