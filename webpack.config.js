const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const dotenv = require('dotenv').config( {
//   path: path.join(__dirname, '.env')
// } )

const DotEnv = require('dotenv-webpack')
const env =
  process.env.NODE_ENV === 'production'
    ? new webpack.EnvironmentPlugin({ ...process.env })
    : new DotEnv()


module.exports = () => {
  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('./public'),
      publicPath: '/'
    },
    // target: 'web',
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.s(a|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' }
      ]
    },
    // devServer: {
    //   contentBase: path.resolve('frontend'),
    //   hot: true,
    //   open: true,
    //   port: 8000,
    //   watchContentBase: true,
    //   historyApiFallback: true,
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:8000',
    //       secure: false
    //     }
    //   }
    // },
    plugins: [
      new webpack.DefinePlugin({
        DEBUG: process.env.NODE_ENV !== 'production',
          'process.env': {
              'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development"),
              'VARIABLE_NAME': JSON.stringify(process.env.VARIABLE_NAME)
     }
      }),
      new DotEnv(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      env
    ]
  }
}
