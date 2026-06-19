// დაამატე BankAccount კლასში მეთოდი, რომელიც თანხის გამოტანისას აკლებს 2% საკომისიოს.

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    const fee = amount * 0.02;  
    const total = amount + fee;

    if (this.balance >= total) {
      this.balance -= total;
      return `withdrawn: ${amount}, tax: ${fee}, left: ${this.balance}`;
    } else {
      return "not enough money";
    }
  }
}