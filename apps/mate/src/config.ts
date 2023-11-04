import srcConfig from './config.json';
import { applyEnvConfig } from '@ljobse/appsettings-loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeNestedObjects = (obj1: any, obj2: any): any =>
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

const processConfig = <T>(
  srcConfig: T,
  localConfigFetcher: () => Partial<T>,
): T => {
  let localConfig: Partial<T> | null = null;
  if (['local', 'test'].includes(process.env.NODE_ENV ?? '')) {
    try {
      localConfig = localConfigFetcher();
    } catch (error) {
      console.error('No local config found');
    }
  }

  let config = applyEnvConfig(srcConfig);

  if (process.env.NODE_ENV !== 'production' && localConfig) {
    config = mergeNestedObjects(
      applyEnvConfig(config),
      applyEnvConfig(localConfig),
    );
  }
  return config;
};

const config = processConfig(srcConfig, () =>
  require(`./config.${process.env.NODE_ENV}.json`),
);

export { config };
export default config;
