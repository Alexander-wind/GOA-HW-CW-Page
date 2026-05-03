// შექმენი რიცხვების მასივი 3, 4, 5, 7, 8. map მეთოდით თითოეულ რიცხვს დაუმატე 1, 
// map მეთოდით მეორე ნაბიჯში გაამრავლე 2-ზე, filter მეთოდით დატოვე მხოლოდ 10-ზე მეტი რიცხვები და reduce მეთოდით იპოვე ნამრავლი.

let arr = [3, 4, 5, 7, 8];

let result = arr
  .map(num => num + 1)
  .map(num => num * 2)
  .filter(num => num > 10);

let product = result.reduce((acc, num) => acc * num, 1);

console.log("Result:", result);
console.log("Product:", product);