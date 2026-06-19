// მოცემულია მოსწავლეთა სია, სადაც თითოეულ მოსწავლეს აქვს სახელი და ქულა.
// დაწერეთ პროგრამა, რომელიც იპოვის იმ მოსწავლეს, ვისაც ყველაზე მაღალი ქულა აქვს.
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const students = [
  { name: "Nika", score: 85 },
  { name: "Ana", score: 92 },
  { name: "Gio", score: 78 }
];

const topStudent = students.reduce((best, current) => {
  return current.score > best.score ? current : best;
});

console.log(topStudent);