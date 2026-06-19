// მოცემულია მასივი:
// const colors = ["red", "green", "blue", "yellow", "black"]
// Destructuring-ის გამოყენებით:
// აიღეთ პირველი ორი ფერი ცალკე ცვლადებში (firstColor, secondColor)
// დანარჩენი ფერები შეინახეთ ახალ მასივში rest ოპერატორის გამოყენებით
// დაბეჭდეთ ყველა ცვლადი.
const colors = ["red", "green", "blue", "yellow", "black"];
const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor)
console.log(secondColor)
console.log(otherColors)
 