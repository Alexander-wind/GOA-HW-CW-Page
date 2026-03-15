//შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებ რიცხვს, შენ უნდა შეამოწმო რიცხვი 0 თუ 0-ზე მეტი, 
// თუ არცერთი პირობა არ არის( ანუ სხვა შემთხვევაში) გამოიტანეთ "რიცხვი არის უარყოფითი".

let num = Number(prompt("Enter a number"));

switch(true) {
    case (num === 0):
        console.log("The number is zero");
        break;
    case (num > 0):
        console.log("The number is positive");
        break;
    default:
        console.log("The number is negative");
}