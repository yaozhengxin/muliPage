module.exports = {
    HTMLDirs: [
        "index",
    ],//添加删除页面，必须修改
    cssPublicPath: "../",
    imgOutputPath: "./images/",
    cssOutputPath: "./css/[name].css",
    devServerOutputPath: "../dist",
    host: "127.0.0.1",  //若启动了SwitchHosts
    port: 1717,//端口号可修改
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:7893',//！！！禁止修改，若想修改请和反向代理服务一起修改
            pathRewrite: {//反向代理可修改
                '^/api': 'mock/'
            },
            changeOrigin: true
        }
    }
}
