'use strict';

const path = require('path');

module.exports = appInfo => ({
  rax: {
    cache: true,
  },
  view: {
    mapping: {
      '.jsx': 'rax',
    },
    defaultViewEngine: 'rax',
    defaultExtension: '.jsx',
    root: `${path.join(appInfo.baseDir, 'app/views')},${path.join(
      appInfo.baseDir,
      'client'
    )}`,
  },
  webpack: {
    config: path.resolve(__dirname, './webpack.config.js'),
    hmr: false,
  },
  isomorphic: {
    babel: {
      presets: [
        [
          require.resolve('babel-preset-env'),
          {
            targets: {
              node: '6.4.0',
            },
          },
        ],
        require.resolve('babel-preset-rax'),
      ],
    },
    universal: {
      assets: ['.css'],
    },
  },
});