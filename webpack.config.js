const CompressionWebackPlugin = require("compression-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const path = require("path")

module.exports = {
    context: path.resolve(__dirname, "./"),
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "[name][hash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "src"),
        },
        hot: true,
        compress: true,
        port: 3003,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|tff|otf)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: "babel-loader"
            },
            {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
                test: /\.s[ac]ss/i,
                use: "sass-loader",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".png", ".css", ".scss", ".json"],
    },
    devtool: 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new HtmlMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: "all",
        }
    },
    plugins: [
        new CompressionWebackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist"),
                }
            ]
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCSSExtractPlugin(),
        new CleanWebpackPlugin(),
    ]
}