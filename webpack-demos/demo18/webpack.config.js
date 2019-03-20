const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'./bundle')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[MiniCssExtractPlugin.loader,
           'css-loader'],
      }
    ]
  },
  plugin:[
    new MiniCssExtractPlugin({
      filename:'[name].css'
    })
  ]
}
