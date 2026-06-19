// შექმენი რიცხვების მასივი 6, 9, 12, 15, 18.
// map მეთოდით თითოეული რიცხვი გაამრავლე 4-ზე,
// reduce მეთოდით იპოვე საშუალო არითმეტიკული,
// Math.round()-ის გამოყენებით დაამრგვალე შედეგი
// და დაბეჭდე საბოლოო პასუხი.

let arr = [6, 9, 12, 15, 18];

let mapped = arr.map(num => num * 4);

let sum = mapped.reduce((acc, num) => acc + num, 0);

let avg = sum / mapped.length;

let rounded = Math.round(avg);

console.log("Mapped:", mapped);
console.log("Average:", avg);
console.log("Rounded:", rounded);