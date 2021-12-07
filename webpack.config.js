const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/catalog.html",
            filename: "catalog.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/basket.html",
            filename: "basket.html"
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: '[name][ext]',
                },
            },
        ],
    },
    devServer: {
        static: './dist',
    },
    externals: {
        "jquery": "jQuery"
    }
};