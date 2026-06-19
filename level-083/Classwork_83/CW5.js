//  მოცემულია ტექსტი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი სიტყვა მთავრდება თანხმოვანი ასოთი 
// (ინგლისურად ნებისმიერი თანხმოვანი ან ქართულად ნებისმიერი თანხმოვანი). ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "hello world cat dog mango car ტესტი სიტყვა ბგერა";

const vowels = ["a","e","i","o","u","ა","ე","ი","ო","უ"];

const result = text.split(" ").reduce((acc, word) => {
  const lastLetter = word[word.length - 1].toLowerCase();

  if (!vowels.includes(lastLetter)) {
    acc++;
  }

  return acc;
}, 0);

console.log(result);