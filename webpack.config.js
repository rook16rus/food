const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        authorization: path.resolve(__dirname, 'src', 'index.js'),
        catalog: path.resolve(__dirname, 'src', 'catalog.js'),
        basket: path.resolve(__dirname, 'src', 'basket.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['authorization'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/catalog.html",
            filename: "catalog.html",
            chunks: ['catalog'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/basket.html",
            filename: "basket.html",
            chunks: ['basket'],
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },

        ],
    },
    devServer: {
        static: './dist',
    },
    externals: {
        "jquery": "jQuery"
    },
    devtool: "eval-source-map"
};