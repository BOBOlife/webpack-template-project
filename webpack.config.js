// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require('eslint-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 讲css变成文件 用link 方式引用
const HTMLWebpackPlugin = require('html-webpack-plugin')

const ENV = process.env.NODE_ENV

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-typescript'] }
        }
      },
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"] // 语义上 style-loader(css-loader(css)) 
        use: [
          // 根据运行环境判断用何 loader
          ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,  // 不可与style-loader 混用   ！！！ 需和html-webpack-plugin 同时使用, 产物才可link 标签 插入 html
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({ extensions: ['.js', '.ts'] }),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin()
  ]
}
