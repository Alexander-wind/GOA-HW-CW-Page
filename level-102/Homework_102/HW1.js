// შექმენი Payment კლასი.
// მონაცემები: თანხა (amount)
// ლოგიკა:
// თუ თანხა > 200 ->10% ფასდაკლება
// შემდეგ დაემატოს 2% საკომისიო
// თუ საბოლოო თანხა > 300 ->დამატებით 5 ლარი
// დაბრუნდეს საბოლოო გადასახდელი თანხა

class Payment {
  constructor(amount) {
    this.amount = amount;
  }

  calculateFinal() {
    let final = this.amount;

    if (final > 200) {
      final *= 0.9;
    }

    final *= 1.02;

    if (final > 300) {
      final += 5;
    }

    return final;
  }
}
