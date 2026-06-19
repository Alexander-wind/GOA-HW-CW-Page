// შექმენი BankAccount კლასი.
// მონაცემები: ბალანსი (balance)
// ლოგიკა (withdraw მეთოდში):
// თუ თანხა > ბალანსი ->"არასაკმარისი თანხა"
// თუ თანხა > 500 ->2% საკომისიო
// სხვა შემთხვევაში ->1%
// ბოლოს განაახლე ბალანსი და დააბრუნე შედეგი

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "not enough money";
    }

    let fee;

    if (amount > 500) {
    fee = 0.02;
    } else {
    fee = 0.01;
    }
    let total = amount + amount * fee;

    this.balance -= total;

    return this.balance;
  }
}

 