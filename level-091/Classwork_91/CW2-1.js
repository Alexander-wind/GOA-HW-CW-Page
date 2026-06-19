// შექმენი ფაილი stringUtils.js
// დააექსპორტე 3 ფუნქცია:
// toUpper(text)
// toLower(text)
// reverse(text)
// შემდეგ main.js
// დააიმპორტე ყველა ფუნქცია
// თითოეულზე გააკეთე მაგალითი
export function toUpper(text) {
    return text.toUpper
}

export function toLower(text) {
    return text.toLower
}

export function reverse(text) {
    let final =''
    for (let i of text) {
        if (i === i.toUpper()) {
            final += i.toLower
        } else {
            final += i.toLower
        }
    }
    return final
}