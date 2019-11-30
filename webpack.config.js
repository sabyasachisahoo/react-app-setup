const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    entry: {
        main: ['./src/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        compress: true,
        open: true,
        hot: false,
        port: 9001
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  'css-loader',
                  'sass-loader',
                ],
              },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin('[name].css'),
        new CleanWebpackPlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;