// მოცემულია ქულებისგან შემდგარი მასივი.
// დაწერეთ პროგრამა, რომელიც დაადგენს, რამდენი ქულა ეკუთვნის დაბალ, საშუალო და მაღალ კატეგორიას, სადაც:
// დაბალი — 40-ზე ნაკლები,
// საშუალო — 40-დან 69-ის ჩათვლით,
// მაღალი — 70 და მეტი.
// ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const scores = [35, 50, 72, 90, 40, 65, 30];

const categories = {
  low: 0,
  medium: 0,
  high: 0
};

scores.forEach(score => {
  if (score < 40) {
    categories.low++;
  } else if (score <= 69) {
    categories.medium++;
  } else {
    categories.high++;
  }
});

console.log(categories);