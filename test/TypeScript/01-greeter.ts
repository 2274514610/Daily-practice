//构建你的第一个TypeScript
function greeter(person:string) {
    return 'Hello,' + person;
}
let user = 'Jane User';
//TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。在这个例子中，我们希望greeter函数接收一个字符串参数。
//然后尝试把greeter的调用改成传入一个数组：
// let user = [0,1,2];
document.body.innerHTML = greeter((user));