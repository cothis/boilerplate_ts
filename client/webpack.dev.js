const path = require('path');
const commonConfig = require('./webpack.common');

module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../server/public'),
    compress: false,
    port: 9000,
    open: true,
    hot: true,
  },
};
