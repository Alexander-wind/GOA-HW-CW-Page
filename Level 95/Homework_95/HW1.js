// შექმენი ფაილი math.js, სადაც დაწერ ორ ფუნქციას add(a, b) და subtract(a, b), 
// რომლებიც დააბრუნებენ შესაბამისად ორი რიცხვის ჯამს და სხვაობას. შემდეგ 
// ეს ფუნქციები გააერთიანე ერთ ობიექტში სახელად math და გააკეთე მისი export. შემდეგ შექმენი მეორე 
// ფაილი app.js, სადაც დააიმპორტებ math ობიექტს და გამოიყენებ მის ფუნქციებს შედეგების გამოსატანად console.log-ის საშუალებით.

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

const math = {
    add,
    subtract
}

export default math