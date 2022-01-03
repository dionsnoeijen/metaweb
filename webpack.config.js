const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    mode: 'production',
    devtool: "source-map",
    entry: {
        registration: './assets/js/registration.js'
    },
    output: {
        path: path.resolve(__dirname, 'src/assetbundles/resources'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new WebpackAssetsManifest({}),
    ]
};
