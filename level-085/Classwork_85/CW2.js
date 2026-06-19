//  მოცემულია ობიექტი:
// const user = {
// username: "gio123",
// email: "gio@gmail.com",
// address: {
// city: "Batumi",
// zip: "6000"
// }
// }
// Nested destructuring-ის გამოყენებით:
// username გადაარქვით userName
// address-იდან პირდაპირ აიღეთ city და zip ცვლადებში
// დაბეჭდეთ ყველა მიღებული ცვლადი.

const user = {
username: "gio123",
email: "gio@gmail.com",
address: {
city: "Batumi",
zip: "6000"
}
}
const {username: userName, email, address: { city, zip}} = user

console.log(userName)
console.log(email)
console.log(city)
console.log(zip)

