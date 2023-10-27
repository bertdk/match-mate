import { makeListView } from '@match-mate-api/nest-utils';
import { Exclude, Expose } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';

@Exclude()
export class PlayerView {
  @Expose()
  @IsUUID()
  public id: string;
  
  @Expose()
  @IsString()
  public name: string;
}

export const ListPlayersView = makeListView(PlayerView);
