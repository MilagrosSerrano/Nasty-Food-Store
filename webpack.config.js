const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./Nuevo Proyecto/src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),    
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            template: './Nuevo Proyecto/src/index.html',
        }),

    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
            }
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },

}