import { EntityBaseType } from '@match-mate-api/core-db';
import { FactoryConstructor } from './factories.types';

// eslint-disable-next-line @typescript-eslint/ban-types
export declare type EntityConstructor<T> = Function & { prototype: T };
export const factoryMap = new Map<
  EntityConstructor<EntityBaseType>,
  FactoryConstructor
>();
