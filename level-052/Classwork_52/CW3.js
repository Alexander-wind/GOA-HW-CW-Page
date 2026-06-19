//შექმენი 2 ცვლადი, სადაც მომხმარებელს შემოატანინებ რიცხვებს. 
// შეამოწმე ეს რიცხვები ერთმანეთს უდრის თუ არა, ასევე შეამოწმე რომელი რიცხვია მეტი 
// და რომელი რიცხვია პატარა (გამოიტანეთ console.log()-ით) 

let num1 = Number(prompt('Enter thr first number: '))
let num2 = Number(prompt('Enter thr second number: '))

if (num1 == num2) {
    console.log('რიცხვები ტოლია')
} else {
    console.log('რიცხვები არ ტოლია')
}

if (num1 > num2) {
    console.log(num1, '>', num2)
} else {
    console.log(num1, '<', num2)
}