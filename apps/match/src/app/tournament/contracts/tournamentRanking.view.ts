import { makeListView } from '@match-mate-api/nest-utils';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class TournamentRankingView {
  @IsUUID()
  public id: string;

  @IsString()
  public name: string;

  @IsNumber()
  public points: number;
}

export const ListTournamentRankingView = makeListView(TournamentRankingView);
