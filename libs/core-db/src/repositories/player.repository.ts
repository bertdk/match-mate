import { EntityName, EntityRepository } from '@mikro-orm/core';

import { EntityManager } from '@mikro-orm/core';
import { SqlEntityManager } from '@mikro-orm/postgresql';
import { Player } from '../entities';

export class PlayerRepository extends EntityRepository<Player> {
  private pem: SqlEntityManager;

  constructor(_em: EntityManager, entityName: EntityName<Player>) {
    super(_em, entityName);
    this.pem = this.getEntityManager() as SqlEntityManager;
  }

  async getPlayersRanking(tournamentId: string, limit: number, offset: number) {
    return this.pem
      .createQueryBuilder(Player, 'p')
      .select('p.id')
      .addSelect('p.name')
      .addSelect('SUM(score.raking_points) points')
      .leftJoin('p.scores', 'score')
      .leftJoin('score.game', 'game', { tournament: tournamentId })
      .where({ tournament: tournamentId })
      .groupBy('p.id')
      .orderBy({ 'SUM(score.raking_points)': 'desc' })
      .offset(offset)
      .limit(limit)
      .execute<{ id: string; name: string; points: string }[]>();
  }
}
