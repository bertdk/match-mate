import { makeListView } from '@match-mate-api/nest-utils';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString, IsUUID } from 'class-validator';

@Exclude()
export class TournamentView {
  @Expose()
  @IsUUID()
  public id: string;
  
  @Expose()
  @IsString()
  public name: string;
  
  @Expose()
  @IsNumber()
  public pointsOnWin?: number;
  
  @Expose()
  @IsNumber()
  public pointsOnTie?: number;
  
  @Expose()
  @IsNumber()
  public pointsOnLoss?: number;
}

export const ListTournamentsView = makeListView(TournamentView);
