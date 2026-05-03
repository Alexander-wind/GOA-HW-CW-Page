//  შექმენი რიცხვების მასივი 1, 2, 3, 4, 5, 6.
// map მეთოდით თითოეულ რიცხვს დაუმატე მისი ინდექსი,
// filter მეთოდით დატოვე მხოლოდ ლუწი შედეგები,
// reduce მეთოდით იპოვე მათი ნამრავლი.

let arr = [1, 2, 3, 4, 5, 6];

let mapped = arr.map((num, i) => num + i);

let filtered = mapped.filter(num => num % 2 === 0);

let product = filtered.reduce((acc, num) => acc * num, 1);

console.log("Mapped:", mapped);
console.log("Filtered (even):", filtered);
console.log("Product:", product);