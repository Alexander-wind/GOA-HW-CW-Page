// მოცემულია ტექსტი.
// დაწერეთ პროგრამა, რომელიც დაითვლის ტექსტში თითოეული სიტყვის გამეორების რაოდენობას.
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "hello world hello coding world";

const words = text.split(" ");

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);