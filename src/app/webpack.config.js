// webpack.config.js

var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map',

  entry: {
    'angular': [
      'rxjs',
      'reflect-metadata',
      'zone.js',
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/router',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
    ],
    'app': './app/main'
  },

  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts','.js','.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [ /node_modules/ ]
      }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'angular', filename: 'angular.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common',   filename: 'common.js' }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )      
  ]
};