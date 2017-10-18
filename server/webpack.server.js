const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

// return config object
config = {
  // inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // tell webpack the root file of our
  // server applicatoin
  entry: './src/index.js',

  // tell webpack where to put the output file
  // that is generated (i.e., bundle.js)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') // new directory
  },

  // tells webpack to not bundle any library into our output bundle
  // if it already exits in the node modules folder
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
