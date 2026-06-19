// შექმენი ცვლადი სადაც შეინახავ ასაკს, შეამოწმე switch-ით მომხმარებელი სრულწლოვანია თუ არა.

let age = Number(prompt("Enter your age"));
switch(true) {
    case (age >= 18):
        console.log("You're an adult");
        break;
    case (age < 18):
        console.log("You're a minor");
        break;
}