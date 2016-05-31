var path = require('path');
var cooking = require('cooking');

cooking.set({
  use: 'vue',
  entry: {
    app: './src/main.js',
    vendor: ['vue']
  },
  dist: './dist',
  template: './src/index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/',
    log: false,
    hostname: require('my-local-ip')()
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: 'vendor',
  publicPath: '/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
