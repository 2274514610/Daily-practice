module.exports = {
    devServer: {
        open: false, //配置自动启动浏览器
        host: 'localhost', // 允许外部ip访问
        port: 8080, // 端口
        https: false, // 启用https
        // overlay: {
        //     warnings: true,
        //     errors: true,
        // }, // 错误、警告在页面弹出
        proxy: {
            '/api': {
                target: 'http://api.tianditu.gov.cn/administrative/api',
                // changeOrigin: true,// 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } // 代理转发配置，用于调试环境
    }
};

