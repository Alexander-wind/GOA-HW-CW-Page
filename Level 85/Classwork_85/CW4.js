// მოცემულია მასივი, რომელიც შეიცავს ობიექტებს:
// [
// { name: “Book”, price: 30, category: “Education” },
// { name: “Headphones”, price: 80, category: “Electronics” },
// { name: “Bag”, price: 50, category: “Fashion” }
// ]
// Destructuring-ის გამოყენებით:
// აიღეთ პირველი ობიექტიდან name და price
// მეორე ობიექტიდან აიღეთ მხოლოდ category
// მესამე ობიექტიდან აიღეთ მხოლოდ name.

 const objects = [
{ name: "Book", price: 30, category: "Education" },
{ name: "Headphones", price: 80, category: "Electronics" },
{ name: "Bag", price: 50, category: "Fashion" }
]

const [ {name: firstName, price: firstprice, category: secondCategory, name: thirdName}] = objects

console.log(firstName)
console.log(firstprice)
console.log(secondCategory)
console.log(thirdName)