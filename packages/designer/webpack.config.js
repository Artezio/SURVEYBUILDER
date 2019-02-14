const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'bundle'),
        host: 'localhost',
        port: '8080',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
};