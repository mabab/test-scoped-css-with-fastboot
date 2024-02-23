'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { GlimmerScopedCSSWebpackPlugin } = require('glimmer-scoped-css/webpack');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    // Add options here
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    packagerOptions: {
      webpackConfig: {
        plugins: [new GlimmerScopedCSSWebpackPlugin()],
      },
    },
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
