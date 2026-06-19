// შექმენი ფაილი math.js, სადაც დაწერ ფუნქციებს multiply(a, b) და divide(a, b), 
// გააკეთე default export ობიექტის სახით და app.js-ში დააიმპორტე და გამოიყენე.

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

export default {
    multiply,
    divide
}