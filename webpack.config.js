const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css/i,
                use: [
                    { loader: "style-loader", options: { injectType: "singletonStyleTag" } },
                    {
                        loader: "css-loader",
                        options: { modules: true, importLoaders: 1 }
                    },
                    "postcss-loader"
                ]
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    })],
    resolve:   {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    }
};