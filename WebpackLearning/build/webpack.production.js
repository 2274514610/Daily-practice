const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            //配置各种压缩方案  当使用OptimizeCssAssetsPlugin压缩了css，那么js不压缩
            new OptimizeCssAssetsPlugin(),   //把抽离出来的css文件进行压缩
            //手动的去压缩js的配置
            new TerserPlugin()
        ]
    }
}
