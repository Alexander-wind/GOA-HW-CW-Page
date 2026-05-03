// შექმენი რიცხვების მასივი 3, 6, 9, 12, 15, 18.
// თითოეული რიცხვი გაზარდე ორჯერ,
// დატოვე მხოლოდ ის შედეგები, რომლებიც 20-ზე მეტია,
// იპოვე მათი ჯამი
// და ბოლოს დაბეჭდე რამდენი რიცხვი დარჩა.

let arr = [3, 6, 9, 12, 15, 18];

let result = arr
  .map(num => num * 2)
  .filter(num => num > 20);

let sum = result.reduce((acc, num) => acc + num, 0);

console.log("Result:", result);
console.log("Sum:", sum);
console.log("Count:", result.length);