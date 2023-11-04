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
    })),
  );

export const processConfig = <T>(
  srcConfig: T,
  localConfigFetcher: () => Partial<T>,
): T => {
  let localConfig: Partial<T>;
  try {
    localConfig = localConfigFetcher();
  } catch (error) {
    console.error('No local config found');
  }

  let config = applyEnvConfig(srcConfig);

  if (localConfig) {
    config = mergeNestedObjects(
      applyEnvConfig(config),
      applyEnvConfig(localConfig),
    );
  }
  return config;
};
