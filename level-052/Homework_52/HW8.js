// შექმენი 3 ცვლადი, ერთი იყოს რო მომხმარებელს უნდა შემოატანინო მათემატიკური სიმბოლო (+, -, *, /, %), დანარჩენი ორი ცვლადი უნდა იყოს რიცხვები. 
// სიმბოლოს მიხედვით შეასრულე ამ ორ ცვლადში სადაც რიცხვები, არის შესრულდეს მოქმედება. (შედეგი გამოიტანეთ console.log-ით)

let symbol = prompt("Enter a math symbol (+, -, *, /, %)")
let n1 = Number(prompt("Enter the first number"))
let n2 = Number(prompt("Enter the second number"))

if (symbol === "+") {
    console.log(n1 + n2)
} else if (symbol === "-") {
    console.log(n1 - n2)
} else if (symbol === "*") {
    console.log(n1 * n2)
} else if (symbol === "/") {
    console.log(n1 / n2)
} else if (symbol === "%") {
    console.log(n1 % n2)
} else {
    console.log("Invalid symbol")
}