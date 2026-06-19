// შექმენი კლასი User, რომელსაც კონსტრუქტორში გადაეცემა name და age, და ობიექტის შექმნისას შეინახე ეს მნიშვნელობები. 
// შემდეგ შექმენი ორი განსხვავებული მომხმარებელი და დაბეჭდე მათი მონაცემები კონსოლში.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Giorgi", 18);
const user2 = new User("Nino", 21);

console.log(user1);
console.log(user2);