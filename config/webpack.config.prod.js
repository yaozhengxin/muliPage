// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
// 引入 静态资源集中输出
const copyWebpackPlugin = require("copy-webpack-plugin");
// 引入 webpack
const webpack = require("webpack");

// 抽取 css
const ExtractTextPlugin = require("extract-text-webpack-plugin");


// 引入多页面文件列表
const config = require("./config");

// 合并配置文件
module.exports = webpackMerge(webpackBase, {
    devtool: false,
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                    }, {
                        loader: "sass-loader",

                    }],
                    publicPath: config.cssPublicPath,
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
        ]
    },
    plugins: [
        // 代码压缩
        new webpack.optimize.UglifyJsPlugin({
            // 开启 sourceMap
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            sourceMap: false
        }),
        // 提取公共 JavaScript 代码
        new webpack.optimize.CommonsChunkPlugin({
            // chunk 名为 commons
            name: "commons",
            filename: "./lib/[name].min.js",
        }),
        //分离css样式
        new ExtractTextPlugin({
            filename: './css/[name].min.css'
        }),
    ]
});
