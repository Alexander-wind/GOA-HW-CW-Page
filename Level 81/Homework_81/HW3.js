// მოცემულია თამაშის მოთამაშეების სია, სადაც თითოეულ მოთამაშეს აქვს სახელი და მოგებული ქულები. დაწერეთ პროგრამა, რომელიც იპოვის მოთამაშეს, 
// რომელსაც ყველაზე ნაკლები ქულა აქვს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const players = [
  { name: "Gio", score: 120 },
  { name: "Nika", score: 80 },
  { name: "Ana", score: 95 }
];

const worstPlayer = players.reduce((worst, current) => {
  return current.score < worst.score ? current : worst;
});

console.log(worstPlayer);