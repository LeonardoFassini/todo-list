const presets = ['@babel/react', '@babel/typescript', ['@babel/env', { modules: false }]];

const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: true,
    },
  ],
  '@babel/plugin-proposal-class-properties',
  'babel-plugin-styled-components',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
];

module.exports = { presets, plugins };
