
// webpack.client.js
const Merge = require('webpack-merge');
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")
const base = require('./webpack.base')


// 继承自webpack.base.js


module.exports = Merge.merge(base, {
  mode: "development",
  entry: {
    // 入口指向 
    client: path.join(__dirname, "./src/entry-client.js")
  },
  output: {
    publicPath: "/"
  }
})

