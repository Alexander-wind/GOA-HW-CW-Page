// შექმენი რიცხვების მასივი -10, -3, 0, 4, 7, 12.
// filter მეთოდით მოაშორე ნულზე ნაკლები რიცხვები,
// map მეთოდით თითოეულ დარჩენილ რიცხვს გამოაკელი 1,
// filter მეთოდით დატოვე მხოლოდ კენტი რიცხვები
// და forEach მეთოდით დაბეჭდე ისინი.

let arr = [-10, -3, 0, 4, 7, 12];

let result = arr
  .filter(num => num >= 0)
  .map(num => num - 1)
  .filter(num => num % 2 !== 0);

result.forEach(num => {
  console.log(num);
});