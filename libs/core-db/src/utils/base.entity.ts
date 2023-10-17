import {
  BaseEntity,
  PrimaryKey,
  Property,
  EntityData,
  AssignOptions,
} from '@mikro-orm/core';
import { instanceToPlain } from 'class-transformer';
import { v4 } from 'uuid';

export type EntityBaseType = { id: string };

export class Base<T extends EntityBaseType> extends BaseEntity<T, 'id'> {
  @PrimaryKey({ columnType: 'uuid' })
  public id: string = v4();

  @Property({ defaultRaw: `now()`, columnType: 'timestamptz(3)' })
  public createdAt: Date = new Date();

  @Property({
    defaultRaw: `now()`,
    columnType: 'timestamptz(3)',
    onUpdate: () => new Date(),
  })
  public updatedAt: Date = new Date();

  public override assign(data: EntityData<T>, options?: AssignOptions) {
    return super.assign(
      data
        ? (instanceToPlain(data, { exposeUnsetFields: false }) as EntityData<T>)
        : {},
      {
        ...options,
        mergeObjects: true,
        updateByPrimaryKey: false,
      }
    ) as T;
  }
}
