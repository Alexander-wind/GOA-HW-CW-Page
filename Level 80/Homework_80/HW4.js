// მოცემულია მოსწავლეთა სია ქულებით.
// დაწერეთ პროგრამა, რომელიც დაადგენს რამდენმა მოსწავლემ ჩააბარა გამოცდა (ქულა ≥ 50), რამდენმა ვერ ჩააბარა, ასევე გამოითვლის ქულების ჯამსა და საშუალო ქულას.
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const students2 = [
  { name: "Nika", score: 85 },
  { name: "Ana", score: 40 },
  { name: "Gio", score: 55 },
  { name: "Lika", score: 30 }
];

const result = students2.reduce((acc, student) => {
  if (student.score >= 50) {
    acc.passed++;
  } else {
    acc.failed++;
  }

  acc.sum += student.score;

  return acc;
}, { passed: 0, failed: 0, sum: 0 });

result.average = result.sum / students2.length;

console.log(result);