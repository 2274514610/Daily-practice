//引入生产环境和开发环境的webpack的配置文件
const dev = require('./webpack.dev')    //开发环境
const production = require('./webpack.production')   //生产环境
const path = require('path')   //引入绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin')  //引入 html-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')   //引入清除无用模块的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')  //引入把css独立打包的插件

const merge = require('webpack-merge');   //合并webpack配置文件的一个东西,需要npm进行安装; npm i webpack-merge --save-dev
// 如果是开发模式,webpack.base.js与webpack.development.js进行合并，如果是生产模式，则webpack.base.js与webpack.production.js进行合并。

module.exports = (env) => {
    // console.log(env)
    console.log('测试。。。')
    let isDev = env.development;
    //base是生产环境和开发环境共同拥有的东西;
    const base = {
        //入口
        entry: path.resolve(__dirname, '../src/index.js'),
        module: {  //loader 配置
            rules: [
                //第一种写法：
                // {test: /\.css$/,use: 'style-loader'},使用正则表达式。  \是转译符，对.css中的.进行转译。
                // {test: /\.css$/,use: 'css-loader'},  //从下往上执行。css-loader解析css语法，然后用style-loader将
                // //解析后的css 变成个style标签插入到页面中。

                //第二种写法：
                // {test: /\.css$/,use:['style-loader','css-loader']}, //这种写法是从后往前走  配置css
                // {
                //     test: /\.css$/, use: ['style-loader', {
                //         loader: 'css-loader',
                //         options: {
                //             //如果css文件中，引入其他的文件，或你使用@import
                //             importLoaders: 2
                //         }
                //     }, 'sass-loader']
                // },
                {
                    test: /\.css$/, use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            //如果css文件中，引入其他的文件，或你使用@import
                            importLoaders: 2
                        }
                    }, 'sass-loader']
                },


                {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}, //sass-loader先解析成css-loader...
                {//打包时，识别一些字体或图标
                    test: /\.(ttf|svg|woff|eot)$/,
                    use: 'file-loader'
                },

                {//打包时，是webpack认识图片
                    test: /\.(png|jpg|jpeg|gif)$/,
                    // use: 'file-loader',   //file-loader默认的功能是copy的作用
                    use: {
                        loader: 'url-loader',
                        options: {
                            name: 'image/[name].[hash:7].[ext]',
                            limit: 1024 * 30
                        }
                    }
                },

                {
                    test: /\.js$/,
                    use: 'babel-loader'
                }
            ]
        },
        //出口
        output: {
            filename: 'bundle.js',   //以bundle.js为基准点,进行路径的选择
            path: path.resolve(__dirname, '../dist')
        },
        plugins: [
            !isDev && new MiniCssExtractPlugin({
                filename: 'css/main.css'
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),  //这个插件会根据这个模板在内存中生成index.html文件。
                filename: 'index.html',  //根据模板，生成指定的文件名
                minify: !isDev && {
                    removeAttributeQuotes: true,   //去掉新生成文件中属性值的双引号
                    collapseWhitespace: true,   // 去掉新生成文件中的换行符
                }
            })
        ].filter(Boolean)
    }
    //判断是生产环境还是开发环境，然后用merge进行模块合并;
    if (isDev) { //生产环境
        return merge(base, dev)   //merge是把两个配置文件合并,需要返回,如果不返回走的还是默认配置
    } else { //开发环境
        return merge(base, production)
    }
}
