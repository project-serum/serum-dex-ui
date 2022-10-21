const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-shorthand-properties',
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2abdd2' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
