// შექმენი Salary კლასი.
// მონაცემები: ხელფასი (amount)
// ლოგიკა:
// 20% გადასახადი
// თუ დარჩენილი > 2000 ->დამატებით 5%
// თუ < 500 ->არ აკლდება გადასახადი
// დააბრუნე სუფთა ხელფასი

class Salary {
  constructor(amount) {
    this.amount = amount;
  }

  getNetSalary() {
    let net = this.amount;

    if (net < 500) {
      return net;
    }
    
    net *= 0.8;

    if (net > 2000) {
      net *= 0.95;
    }

    return net;
  }
}
