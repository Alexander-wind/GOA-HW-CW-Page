// შექმენი ფაილი stringUtils.js, სადაც დაწერ ფუნქციებს capitalize(str) და reverse(str), 
// გააერთიანე ერთ ობიექტში stringUtils და გააკეთე export, შემდეგ სხვა ფაილში გამოიყენე ეს ფუნქციები.

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function reverse(str) {
    return str.split("").reverse().join("")
}

const stringUtils = {
    capitalize,
    reverse
}

export default stringUtils