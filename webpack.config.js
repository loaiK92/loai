const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const javascript = {
  test: /\.(js)$/,
  use: [{
      loader: 'babel-loader',
      options: { presets: ['env'] }
  }],
};

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 4 versions' })]; }
  }
};


const styles = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{loader: 'css-loader', options: { minimize: true } }, 'sass-loader']
  })
};

const images = {
  test: /\.(jpg|png|jpeg|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: 'images/'
      }
    }
  ]
}

module.exports = {
  mode: 'production',
  entry: './public/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [javascript, styles, images]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new UglifyJsPlugin()
  ]
};
process.noDeprecation = true;