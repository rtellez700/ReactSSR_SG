const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

// return config object
config = {
  // tell webpack the root file of our
  // server applicatoin
  entry: './src/client/client.js',

  // tell webpack where to put the output file
  // that is generated (i.e., bundle.js)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // new directory
  }
};

module.exports = merge(baseConfig, config);
