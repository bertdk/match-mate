import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
export const representationValidator = async <T>(
  view: new (...args: any[]) => T,
  body: T,
) => {
  if (Array.isArray(body))
    throw new Error(
      'Body must be an object. Use representationListValidator instead',
    );
  const object: T = plainToClass(view, (body as any)?.toJSON?.() ?? body);
  const errors = await validate(object as any);
  if (errors.length > 0) {
    const readableErrors = errors.reduce(map, {});
    const parsedErrors = JSON.stringify(readableErrors, null, 2);
    throw new Error(
      `Representation ${view.name} should not have ${errors.length} errors \n${parsedErrors}`,
    );
  }
};
export const representationListValidator = async <T>(
  view: new (...args: any[]) => T,
  items: T[],
) => {
  await Promise.all(items.map((x) => representationValidator(view, x)));
};
const reduce = (errors: ValidationError[]) => {
  return errors.reduce(map, {});
};
const map = (m: any, error: ValidationError) => {
  m[error.property] = error.constraints
    ? Object.values(error.constraints)
    : reduce(error.children);
  return m;
};
