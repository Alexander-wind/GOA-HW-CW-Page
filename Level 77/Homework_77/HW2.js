// შექმენი რიცხვების მასივი 5, 8, 3, 12, 10, 7. filter მეთოდით დატოვე მხოლოდ ლუწი რიცხვები, map მეთოდით თითოეული გაამრავლე 2-ზე, 
// sort მეთოდით დაალაგე ზრდადობით და forEach მეთოდით დაბეჭდე თითოეული რიცხვი.

let arr = [5, 8, 3, 12, 10, 7];

let result = arr
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .sort((a, b) => a - b);

result.forEach(num => {
  console.log(num);
});