import { PATH_METADATA } from '@nestjs/common/constants';

export const getEndpointPath = <T>(
  controller: new (...args: any[]) => T,
): {
  [K in keyof T]: (params?: any) => string;
} =>
  new Proxy({} as any, {
    get: (_, functionName: any) => {
      let functionPath: string = Reflect.getMetadata(
        PATH_METADATA,
        controller.prototype[functionName],
      );
      functionPath =
        !functionPath || functionPath.startsWith('/')
          ? functionPath
          : `/${functionPath}`;

      const rawUrl = `/${Reflect.getMetadata(
        PATH_METADATA,
        controller,
      )}${functionPath}`;
      return (params = {}) =>
        Object.keys(params).reduce(
          (result, key) => result.replace(`:${key}`, params[key]),
          rawUrl,
        );
    },
  });
