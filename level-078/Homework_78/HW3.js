// შექმენი რიცხვების მასივი 1, 3, 5, 7, 9.
// თითოეულ რიცხვს დაუმატე მისი პოზიციის ნომერი მასივში,
// დატოვე მხოლოდ ის შედეგები, რომლებიც კენტია,
// და გამოთვალე მათი ნამრავლი.

let arr = [1, 3, 5, 7, 9];

let result = arr
  .map((num, index) => num + index)
  .filter(num => num % 2 !== 0);

let product = result.reduce((acc, num) => acc * num, 1);

console.log("Result:", result);
console.log("Product:", product);