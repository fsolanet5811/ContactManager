/// <binding BeforeBuild='Run - Development' />
const path = require("path");
const webpack = require("webpack");
require("babel-polyfill");

module.exports = {
    entry: ["babel-polyfill", "./React/src/index.js"],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "React/dist/"),
        publicPath: "React/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "React/public/"),
        port: 51055,
        publicPath: "http://poosdcontactmanager.azurewebsites.net/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};