const path = require("path");
module.exports = {
    mode: 'development',
    devServer: {  //开发服务器
        port: 3000,  //配置端口
        compress: true, //gzip  压缩
        contentBase:path.resolve(__dirname,'../dist')  //webpack启动服务会在dist目录下
    }
};
