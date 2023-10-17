const { composePlugins, withNx } = require('@nx/webpack');
const { EnvironmentPlugin, IgnorePlugin } = require('webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  config.output.devtoolModuleFilenameTemplate =
    'file:///[absolute-resource-path]';
  const optionalModules = new Set([
    ...Object.keys(require('@mikro-orm/core/package.json').peerDependencies),
    ...Object.keys(
      require('@mikro-orm/core/package.json').devDependencies || {}
    ),
    ...Object.keys(
      require('@nestjs/common/package.json').devDependencies || {}
    ),
    ...Object.keys(require('@nestjs/core/package.json').devDependencies || {}),
    '@nestjs/core',
  ]);

  config.ignoreWarnings.push(/Failed to parse source map/);

  config.plugins.push(
    new EnvironmentPlugin({ WEBPACK: true }),
    new IgnorePlugin({
      checkResource: (resource) => {
        const baseResource = resource
          .split('/', resource[0] === '@' ? 2 : 1)
          .join('/');

        if (optionalModules.has(baseResource)) {
          try {
            require.resolve(resource);
            return false;
          } catch {
            return true;
          }
        }

        return false;
      },
    })
  );
  return config;
});
