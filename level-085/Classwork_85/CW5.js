// მოცემულია ორი ცვლადი:
// let x = 100
// let y = 200
// Destructuring-ის გამოყენებით გაცვალეთ მათი მნიშვნელობები (არ გამოიყენოთ მესამე ცვლადი).
// მოცემულია ობიექტი:
// const student = {
// name: “Nika”,
// age: 12,
// grade: 6,
// school: “Public School”,
// city: “Tbilisi”
// }
// Destructuring-ის გამოყენებით:
// აიღეთ name და age ცალკე ცვლადებში
// დანარჩენი მონაცემები შეინახეთ ახალ ობიექტში Rest operator-ის გამოყენებით

let x = 100;
let y = 200;

[x,y] = [y,x]

console.log(x)
console.log(y)


const student = {
name: "Nika",
age: 12,
grade: 6,
school: "Public School",
city: "Tbilisi"
}

const {name, age, ...otherThings} = student

console.log(name)
console.log(age)
console.log(otherThings)