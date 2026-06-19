// მოცემულია რიცხვებისგან შემდგარი მასივი.
// დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია მასივში.
// ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const numbers = [1, 2, 3, 4, 5, 6];

const result2 = {
  even: 0,
  odd: 0
};

numbers.forEach(num => {
  if (num % 2 === 0) {
    result2.even++;
  } else {
    result2.odd++;
  }
});

console.log(result2);