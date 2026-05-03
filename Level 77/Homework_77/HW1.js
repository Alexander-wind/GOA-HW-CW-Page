// შექმენი რიცხვების მასივი 5, 7, 10, 8, 12, 4. map მეთოდით თითოეული რიცხვი გაამრავლე 3-ზე, filter მეთოდით დატოვე მხოლოდ 20-ზე მეტი რიცხვები, 
// reduce მეთოდით იპოვე მათი ჯამი და ბოლოს დაბეჭდე რამდენი რიცხვი დარჩა.

let arr = [5, 7, 10, 8, 12, 4];

let mapped = arr.map(num => num * 3);

let filtered = mapped.filter(num => num > 20);

let sum = filtered.reduce((acc, num) => acc + num, 0);

console.log("Filtered:", filtered);
console.log("Sum:", sum);
console.log("Count:", filtered.length);