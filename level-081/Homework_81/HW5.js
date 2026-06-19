// მოცემულია ტექსტი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი სიტყვა იწყება ხმოვანი ასოთი (a, e, i, o, u — ინგლისურად 
// ან ა, ე, ი, ო, უ — ქართულად). ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "apple orange banana egg ice cream ულუფა ანა ომი";

const vowels = ["a", "e", "i", "o", "u", "ა", "ე", "ი", "ო", "უ"];

const count = text.split(" ").reduce((acc, word) => {
  const firstLetter = word[0].toLowerCase();
  
  if (vowels.includes(firstLetter)) {
    acc++;
  }

  return acc;
}, 0);

console.log(count);