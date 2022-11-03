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
      // {
      //   test: /\.s[ac]ss$/i,
      //   // use: ["style-loader", "css-loader"] // 语义上 style-loader(css-loader(css)) 
      //   use: [
      //     // 根据运行环境判断用何 loader
      //     // style-loader 将css内容注入到页面的<style>标签里 使样式生效
      //     ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,   // 不可与style-loader 混用   ！！！ 需和html-webpack-plugin 同时使用, 产物才可link 标签 插入 html
      //     'css-loader', // 将css 代码 放到 js 的文件里面
      //     'sass-loader' // less-loader stylus-loader 一样  （test匹配文件 记得修改）
      //   ]
      // },
    
      {
        test: /\.s[ca]ss$/,
        use: [
          "style-loader", 
          {
            loader: "css-loader",            
            options: {
              importLoaders: 1
            }
          }, 
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       // 添加 autoprefixer 插件 可以为css 代码自动添加浏览器的前缀
          //       plugins: [require("autoprefixer")],
          //     },
          //   },
          // }
          "postcss-loader",
          'sass-loader'  // postcss  和 预处理器 非互斥的关系
        ],
      }
    ]
  },
  plugins: [
    new ESLintPlugin({ extensions: ['.js', '.ts'] }),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin()
  ]
}
