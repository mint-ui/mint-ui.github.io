var path = require('path');
var cooking = require('cooking');

cooking.set({
  use: 'vue',
  entry: {
    app: './src/main.js'
  },
  dist: './dist',
  template: './src/index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/',
    hostname: require('my-local-ip')(),
    log: false
  },

  // production
  clean: true,
  hash: true,
  publicPath: '/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

cooking.add('externals', {
  'vue': 'Vue'
});

module.exports = cooking.resolve();
