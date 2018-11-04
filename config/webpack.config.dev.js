// 引入基础配置文件
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");



// 引入配置文件
const config = require("./config");
// 合并配置文件
module.exports = webpackMerge(webpackBase, {
    devtool: "cheap-module-source-map",

    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                    }, {
                        loader: "sass-loader",

                    }
                ],
            },
        ]
    },
    
    // 配置 webpack-dev-server
    devServer: {
        // 项目根目录
        contentBase: config.devServerOutputPath,
        // 错误、警告展示设置
        overlay: {
            errors: true,
            warnings: true
        },
        hot: true,
        host: config.host,
        port: config.port,
        disableHostCheck: true,
        proxy: config.proxy,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
});
