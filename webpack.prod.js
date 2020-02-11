const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader:['babel-loader'],
            include:path.join(__dirname,'src'),
            exclude:path.join(__dirname,'node_modules')
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })]
}