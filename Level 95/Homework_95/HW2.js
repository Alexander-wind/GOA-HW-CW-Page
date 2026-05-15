// შექმენი ფაილი utils.js, სადაც დაწერ სამ ფუნქციას min(a, b), max(a, b) და average(a, b), შემდეგ გააერთიანე ერთ ობიექტში 
// utils და გააკეთე export, ხოლო app.js-ში დააიმპორტე და დაბეჭდე შედეგები.

function min(a, b) {
    return a < b ? a : b
}

function max(a, b) {
    return a > b ? a : b
}

function average(a, b) {
    return (a + b) / 2
}

const utils = {
    min,
    max,
    average
}

export default utils