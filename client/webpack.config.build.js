const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCSSExtractPlugin.loader },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({filename: 'css/[name].css'}),
        new HtmlWebpackPlugin({title: "Pandas Gaurd"})
    ],
    optimization: {
        splitChunkes:{
            chunks: 'all',
            minSize: 10000,
            name:'commones'
        }
    }
}