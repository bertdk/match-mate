import { makeListView } from '@match-mate-api/nest-utils';
import { IsString, IsUUID } from 'class-validator';

export class PlayerView {
  @IsUUID()
  public id: string;

  @IsString()
  public name: string;
}

export const ListPlayersView = makeListView(PlayerView);
