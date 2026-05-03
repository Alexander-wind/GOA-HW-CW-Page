// მოცემულია ობიექტი:

// {
//   city: "Tbilisi",
//   country: "Georgia"
// }
// დესტრუქტურინგის გამოყენებით ამოიღე მხოლოდ city და გამოიტანეთ.

const obj = {
  city: "Tbilisi",
  country: "Georgia"
};

const { city } = obj;

console.log(city);