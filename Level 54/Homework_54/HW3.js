// შექმენი 2 ცვლადი სადაც შეინახავ ფიგურის სიგრძეს და სიგანეს, შენი დავალებაა გაიგო ეს ფიგურა კვადრატია თუ არა, 
// დავალება უნდა გააკეთო switch-ი. (მინიშნება: კვადრატს ყველა გვერდი ტოლი აქვს)

let length = Number(prompt("Shenyvarat sigzra"));
let width = Number(prompt("Shenyvarat sigane"));

switch(length === width) {
    case true:
        console.log("Figura aris kvadrati");
        break;
    case false:
        console.log("Figura ar aris kvadrati");
        break;
}