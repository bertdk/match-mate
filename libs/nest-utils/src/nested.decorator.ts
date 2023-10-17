import { Type } from 'class-transformer';
import { ValidateNested, ValidationOptions } from 'class-validator';

/**
 * Nested objects with this decorator will also be validated.
 *
 * Transforms the nested objects to the defined type
 * @param type The type to validate and transform the nested property
 * @param isArray Whether the property is an object or an array of objects
 *
 * @category Decorator
 */
export const Nested = (
  validationOptions?: ValidationOptions,
  type?: new (...args: any[]) => any
) => {
  const nestedValidation = ValidateNested({ ...validationOptions });
  const typeParser = type ? Type(() => type) : Type();

  return (object: any, propertyName: string) => {
    nestedValidation(object, propertyName);
    typeParser(object, propertyName);
  };
};
