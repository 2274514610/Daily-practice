// const path = require('path');   //引入绝对路径
// console.log(path.resolve(__dirname,'./src/index.js'));
// module.exports = {
//     mode: 'development',   //我们也可以在这里直接配打包模式
//     //入口   一定要是绝对路径
//     entry:path.resolve(__dirname,'./src/index.js'),
//     //出口
//     output: {
//         filename: 'bundle.js',   //如果我们不指定，默认是main.js
//         path: path.resolve(__dirname,'dist')   //如果我们不指定，默认是dist
//         //上面两段代码的意思是：打包完成后,在dist目录下，生成一个bundle.js打包文件
//     }
//
// };
module.exports = (env) => {
    console.log(env)
}
