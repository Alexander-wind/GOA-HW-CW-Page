// შექმენი რიცხვების მასივი -5, 2, 3, 7, -1, 9. filter მეთოდით დატოვე მხოლოდ დადებითი რიცხვები, filter მეთოდით დატოვე მხოლოდ კენტი რიცხვები, 
// map მეთოდით თითოეული გაამრავლე 5-ზე და forEach მეთოდით დაბეჭდე შედეგები.

let arr = [-5, 2, 3, 7, -1, 9];

let result = arr
  .filter(num => num > 0)
  .filter(num => num % 2 !== 0)
  .map(num => num * 5);

result.forEach(num => {
  console.log(num);
});