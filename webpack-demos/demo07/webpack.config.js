const path=require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle1.js',
    path:path.resolve(__dirname)
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       test: /\.js(\?.*)?$/i,
  //     }),
  //   ],
  // },
};
