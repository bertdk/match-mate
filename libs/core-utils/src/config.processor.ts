import { applyEnvConfig } from '@ljobse/appsettings-loader';

const mergeNestedObjects = (obj1, obj2) =>
  Object.assign(
    {},
    obj1,
    ...Object.keys(obj2).map((key) => ({
      [key]:
        obj2[key] && typeof obj2[key] === 'object'
          ? mergeNestedObjects(obj1[key], obj2[key])
          : obj2[key],
    }))
  );

export const processConfig = <T>(
  srcConfig: T,
  localConfigFetcher: () => Partial<T>
): T => {
  let localConfig;
  if (['local', 'test'].includes(process.env.NODE_ENV)) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      localConfig = localConfigFetcher();
    } catch (error) {
      console.error('No local config found');
    }
  }

  let config = applyEnvConfig(srcConfig);

  if (process.env.NODE_ENV !== 'production' && localConfig) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config = mergeNestedObjects(
      applyEnvConfig(config),
      applyEnvConfig(localConfig)
    );
  }
  return config;
};
