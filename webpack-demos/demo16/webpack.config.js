const path=require('path');

module.exports = {
  entry:'./main.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname)//绝对路径，不写的话默认为./dist文件
  }
};
