const path=require('path');
const CleanWebpackPlugin=require('clean-webpack-plugin');

module.exports = {
  entry:'./main.js',
  output: {
    filename: 'dist.js',
    path:path.resolve(__dirname,'./dist')//绝对路径，不写的话默认为./dist文件
  },
  plugins:[
    new CleanWebpackPlugin(['dist'])
  ]
};
