import { makeListView } from '@match-mate-api/nest-utils';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString, IsUUID } from 'class-validator';

@Exclude()
export class TournamentRankingView {
  @Expose()
  @IsUUID()
  public id: string;

  @Expose()
  @IsString()
  public name: string;

  @Expose()
  @IsNumber()
  public points: number;
}

export const ListTournamentRankingView = makeListView(TournamentRankingView);
