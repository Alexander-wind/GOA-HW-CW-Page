// შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ობიექტს შემდეგი სტრუქტურით:
// {
// name: “Nika”,
// address: {
// city: “Tbilisi”,
// zip: “0101”
// }
// }

// Destructuring-ის გამოყენებით ფუნქციაში:
// გამოიტანეთ name
// გამოიტანეთ address ობიექტიდან city და zip
// დამატებით:
// თუ address ობიექტი არ გადმოეცემა ფუნქციას, გამოიყენეთ default მნიშვნელობები:
// city იყოს “Unknown”
// zip იყოს “0000”
// ფუნქცია უნდა მუშაობდეს ორივე შემთხვევაში, როცა address არსებობს და როცა არ არსებობს.

const user1 = {
name: "Nika",
address: {
city: "Tbilisi",
zip: "0101"
}
}

const {name, address: {city, zip} } = user1

console.log(name)
console.log(city)
console.log(zip)
