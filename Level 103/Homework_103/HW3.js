//  შექმენი თამაში სადაც ეკრანი იცვლის ფერს წითელი მწვანე ლურჯი მომხმარებელმა უნდა 
// დააჭიროს მხოლოდ როცა არის მწვანე თუ სხვა ფერზე დააჭერს შეცდომაა ბოლოს გამოიტანე სწორები და შეცდომები

let colors = ["red", "green", "blue"];
let current = "red";
let correct = 0;
let wrong = 0;

setInterval(() => {
  current = colors[Math.floor(Math.random() * 3)];
  document.body.style.background = current;
}, 1000);

function clickColor() {
  if (current === "green") {
    correct++;
  } else {
    wrong++;
  }

  document.getElementById("result").innerText =
    "Correct: " + correct + " | Wrong: " + wrong;
}