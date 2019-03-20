const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin=require("clean-webpack-plugin");
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./bundle')
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'demo08',//html文件的title
        filename: 'demo08.html'
      }),
    // new OpenBrowserPlugin(),
    new CleanWebpackPlugin(),
    new UglifyJsPlugin()
    //官网提供的方法不可用
    // optimization: {
    //   minimizer: [new UglifyJsPlugin()],
    // },
  ],
};
