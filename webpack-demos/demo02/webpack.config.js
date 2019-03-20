const path=require('path');
module.exports = {
  //1.根据入口名打包成多个文件
  // entry:{
  //   bundle1:'./main1.js',
  //   bundle2:'./main2.js'
  // },
  // output: {
  //   filename: '[name].js',
  //   path:path.resolve(__dirname)
  // }
  //2.多个文件打包成一个文件
  entry:['./main1.js','./main2.js'],
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname)
  }
};
