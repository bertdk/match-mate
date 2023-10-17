import { makeListView } from '@match-mate-api/nest-utils';
import { IsString } from 'class-validator';

export class GetTestView {
  @IsString()
  public name: string;
}
export const ListAttributeView = makeListView(GetTestView);
