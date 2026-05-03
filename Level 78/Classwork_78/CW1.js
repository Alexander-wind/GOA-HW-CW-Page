// შექმენი რიცხვების მასივი 4, 9, 2, 15, 6, 11.
// map მეთოდით თითოეული რიცხვი აიყვანე კვადრატში,
// filter მეთოდით დატოვე მხოლოდ 50-ზე ნაკლები მნიშვნელობები,
// reduce მეთოდით იპოვე მათი ჯამი
// და ბოლოს დაბეჭდე მაქსიმალური რიცხვი მიღებული მასივიდან.

let arr = [4, 9, 2, 15, 6, 11];

let squared = arr.map(num => num * num);

let filtered = squared.filter(num => num < 50);

let sum = filtered.reduce((acc, num) => acc + num, 0);

let max = Math.max(...filtered);

console.log("Squared:", squared);
console.log("Filtered (<50):", filtered);
console.log("Sum:", sum);
console.log("Max:", max);