import srcConfig from './config.json';
import { processConfig } from '@match-mate-api/core-utils';

const config = processConfig(srcConfig, () =>
  require(`./config.${process.env.NODE_ENV}.json`)
);

export { config };
export default config;
