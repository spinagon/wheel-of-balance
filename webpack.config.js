const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.'),
  },
  mode: 'development',
  devServer: {
    static: './',
    hot: true,
    open: true
  },
};
