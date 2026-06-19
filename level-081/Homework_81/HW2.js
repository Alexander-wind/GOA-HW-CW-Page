// მოცემულია ონლაინ მაღაზიაში მომხმარებლების მიერ დახარჯული თანხების მასივი. დაწერეთ პროგრამა, რომელიც დაადგენს რამდენი მომხმარებელი ეკუთვნის შემდეგ კატეგორიებს:
// მცირე ხარჯვა — 100-ზე ნაკლები
// საშუალო ხარჯვა — 100-დან 499-ის ჩათვლით
// დიდი ხარჯვა — 500 და მეტი
// ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const expenses = [50, 120, 600, 300, 80, 1000];

const categories = {
  low: 0,
  medium: 0,
  high: 0
};

expenses.forEach(amount => {
  if (amount < 100) {
    categories.low++;
  } else if (amount <= 499) {
    categories.medium++;
  } else {
    categories.high++;
  }
});

console.log(categories);