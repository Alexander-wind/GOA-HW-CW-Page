// შექმენი ფაილი სადაც იქნება:
// პროდუქტების მასივი
// ფუნქცია რომელიც აბრუნებს ყველა პროდუქტს
// ფუნქცია რომელიც ფილტრავს პროდუქტებს ფასის მიხედვით
// პროდუქტების მასივი იყოს default export
// ფუნქციები იყოს named export
// შემდეგ სხვა ფაილში:
// დააიმპორტე მასივი და ფუნქციები
// დაბეჭდე შედეგები.


const products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 200 },
  { name: "Mouse", price: 50 }
];

export function getAllProducts() {
  return products;
}

export function filterByPrice(maxPrice) {
  return products.filter(product => product.price <= maxPrice);
}

export default products;