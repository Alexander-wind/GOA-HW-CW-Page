// შექმენი Shop კლასი, სადაც იქნება პროდუქტის ყიდვის მეთოდი. ყიდვისას დაემატოს 5% საკომისიო მთლიან თანხაზე.

class Shop {
  buy(product) {
    const finalPrice = product.getFinalPrice();
    const fee = finalPrice * 0.05; 
    const total = finalPrice + fee;

    return `total amount paid: ${total}`;
  }
}