const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

const path = require('path');
module.exports = ({ config, mode }) => {
  config.resolve.plugins = [new TSDocgenPlugin()];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    use: [
      { loader: 'babel-loader' },
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          setDisplayName: true,
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    ...config.resolve.alias,
    '@app': path.resolve(__dirname, '../../src/app'),
    '@atomic': path.resolve(__dirname, '../../src/atomic'),
  };
  return config;
};
