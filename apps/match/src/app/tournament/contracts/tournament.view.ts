import { makeListView } from '@match-mate-api/nest-utils';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class TournamentView {
  @IsUUID()
  public id: string;

  @IsString()
  public name: string;

  @IsNumber()
  public pointsOnWin?: number;

  @IsNumber()
  public pointsOnTie?: number;

  @IsNumber()
  public pointsOnLoss?: number;
}

export const ListTournamentsView = makeListView(TournamentView);
