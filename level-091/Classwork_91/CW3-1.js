// შექმენი ფაილი ტექსტის დამუშავებისთვის.
// ფუნქცია რომელიც ტექსტს დიდ ასოებად გადაიყვანს
// ფუნქცია რომელიც ტექსტს შემოაბრუნებს
// ფუნქცია რომელიც ტექსტს დაამატებს ძახილის ნიშანს
// ერთ-ერთი ფუნქცია იყოს default expor
// დანარჩენი იყოს named export
// შემდეგ სხვა ფაილში
// დააიმპორტე ყველა ფუნქცია
// გააკეთე მაგალითები.

 
export function toUpper(text) {
    return text.toUpperCase();
}

export function reverseText(text) {
    return text.split("").reverse().join("");
}

export default function addExclamation(text) {
    return text + "!";
}