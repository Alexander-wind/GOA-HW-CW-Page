//შექმენი ფაილი, სადაც ერთდროულად გამოიყენებ named export-საც და default export-საც. შემდეგ სხვა ფაილში ორივე დააიმპორტე.


const user = {
    name: "Alex",
    age: 20
};

export default user;

export function sayHello() {
    return "Hello!";
}

export function getAge(age) {
    return `Age is ${age}`;
}