'use strict'
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: ['babel-polyfill','./src/app.js'],
  output: {
    path: path.join(__dirname, '../server/build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
},
  devServer: {
    port: 3000,
    index: '', 
    historyApiFallback: true,
    proxy: {
      context: () => true,
      target: 'http://localhost:8081'
    },
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
     {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.js$/,
      use: 'babel-loader'
    }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}