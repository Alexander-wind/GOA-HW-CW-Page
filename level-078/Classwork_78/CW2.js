// შექმენი რიცხვების მასივი 10, 3, 18, 7, 14, 1.
// filter მეთოდით დატოვე მხოლოდ 5-ზე მეტი რიცხვები,
// map მეთოდით თითოეული გაყავი 2-ზე,
// sort მეთოდით დაალაგე კლებადობით
// და forEach მეთოდით დაბეჭდე თითოეული ელემენტი.

let arr = [4, 9, 2, 15, 6, 11];

let squared = arr.map(num => num * num);

let filtered = squared.filter(num => num < 50);

let sum = filtered.reduce((acc, num) => acc + num, 0);

let max = Math.max(...filtered);

console.log("Squared:", squared);
console.log("Filtered (<50):", filtered);
console.log("Sum:", sum);
console.log("Max:", max);