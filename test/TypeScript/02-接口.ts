//接口
interface Person {  // interface 接口  Person 名称
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello,' + person.firstName + '' + person.lastName;
}

let user = {firstName: 'Jane',lastName: 'User'};
document.body.innerHTML = greeter(user);