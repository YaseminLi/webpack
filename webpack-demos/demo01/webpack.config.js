const path=require('path');

module.exports = {
  mode:'none',
  entry:'./main.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'./bundle')//绝对路径，不写的话默认为./dist文件
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],//CSS=loader先读取css文件，然后另一个是样式加载器将<style>标签插入
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options:{
            limit:8192//？？ If the image size is smaller than 8192 bytes, it will be transformed into Data URL; otherwise, it will be transformed into normal URL.
          }
        }
        ]
      }
    ]
  }
};
