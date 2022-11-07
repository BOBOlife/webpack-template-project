// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require('eslint-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 讲css变成文件 用link 方式引用
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader")

const ENV = process.env.NODE_ENV

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  devServer: {
    hot: true,
    open: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   use: [
      //     // {
      //     //   loader: 'babel-loader',
      //     //   options: { presets: ['@babel/preset-typescript']}
      //     // },
      //     {
      //       loader:"ts-loader",
      //       options: {
      //       // 指定特定的ts编译配置，为了区分脚本的ts配置
      //         configFile: path.resolve(__dirname, './tsconfig.json'),
      //         // appendTsSuffixTo: [/\.vue$/]
              
      //       }
      //     }]
      //   // use: {
      //   //   loader: 'babel-loader',
      //   //   options: { presets: ['@babel/preset-typescript'] }
      //   // }
      // },
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
    
      // {
      //   test: /\.s[ca]ss$/,
      //   use: [
      //     "style-loader", 
      //     {
      //       loader: "css-loader",            
      //       options: {
      //         importLoaders: 1
      //       }
      //     }, 
      //     // {
      //     //   loader: "postcss-loader",
      //     //   options: {
      //     //     postcssOptions: {
      //     //       // 添加 autoprefixer 插件 可以为css 代码自动添加浏览器的前缀
      //     //       plugins: [require("autoprefixer")],
      //     //     },
      //     //   },
      //     // }
      //     "postcss-loader",
      //     'sass-loader'  // postcss  和 预处理器 非互斥的关系
      //   ],
      // },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      //  * <template> 的处理规则会稍微不同，因为绝大部分 Webpack 模板类 Loader 都会返回一个模板函数，
      //  * 而不是编译好的 HTML 片段，这与 Vue SFC 将 <template> 编译为 render 函数的规则相冲突，
      //  * 此时通常需要使用一个返回原始的 HTML 字符串的 loader，例如使用 pug-plain-loader，而不是 pug-loader
      //  * 
      {
        test: /\.pug$/,
        use:  ["pug-plain-loader"] 
      }
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      }
    ]
  },
  plugins: [
    // new ESLintPlugin({ extensions: ['.js', '.ts'] }),
    // new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
    templateContent: `
    <!DOCTYPE html>
    <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="Content-Type" content="text/html" >
          <title>Webpack App</title>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `
  }),
  ]
}
