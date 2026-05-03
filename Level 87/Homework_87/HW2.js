// შექმენი ობიექტი:
// const user = {
//   name: "Giga",
//   age: 17
// };
// შექმენი ახალი ობიექტი სადაც:
// დაემატება role: "admin"
// დაემატება isActive: true
// ყველაფერი გააკეთე spread-ის გამოყენებით.

const user = {
  name: "Giga",
  age: 17
};

const user1 = {
    ...user, role: "Admin", isActive: true
}