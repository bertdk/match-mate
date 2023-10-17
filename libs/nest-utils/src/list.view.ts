import { IsNumber } from 'class-validator';
import { Nested } from './nested.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class ListView<TChildView> {
  items?: TChildView[];

  @IsNumber()
  count?: number;
}

export const makeListView = <TChildView>(
  childViewClass: new () => TChildView
) => {
  class ListViewFactory extends ListView<TChildView> {
    @Nested({ each: true }, childViewClass)
    @ApiProperty({ type: [childViewClass] })
    override items?: TChildView[];
  }

  const name = `List${childViewClass.name}`;
  Object.defineProperty(ListViewFactory, 'name', {
    value: name,
  });
  return ListViewFactory;
};
