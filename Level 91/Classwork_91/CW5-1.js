// შექმენი ფაილი, სადაც:
// შექმნი მომხმარებლის ობიექტს (სახელი, ასაკი, პროფესია)
// ასევე შექმნი ორ ფუნქციას: ერთი მომხმარებლის მისალმებისთვის და მეორე მისი ასაკის გამოსატანად

// მომხმარებლის ობიექტი უნდა იყოს default export
// ფუნქციები უნდა იყოს named export

// დააიმპორტე ობიექტიც და ფუნქციებიც
// გამოიყენე ისინი კონსოლში.

const user = {
  name: "Alex",
  age: 25,
  profession: "Programmer"
};

export function greetUser(user) {
  return `Hello, ${user.name}!`;
}

export function showAge(user) {
  return `Age: ${user.age}`;
}

export default user;