const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader?limit=25000',
        query: {
          limit: 10000,
          name: 'assets/imgs/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: [autoprefixer]
            }
        })
    ]
};
