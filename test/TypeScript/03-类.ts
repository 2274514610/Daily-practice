//TypeScript支持JavaScript的新特性，比如支持基于类的面向对象的编程
//让我们创建一个student类，它带有一个构造函数和一些公共字段。注意类的接口可以一块共作，程序员可以自行决定抽象的级别。
//还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello,' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane','M.','User');

document.body.innerHTML = greeter(user);