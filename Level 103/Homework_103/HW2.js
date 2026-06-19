// შექმენი თამაში სადაც არის 5 ღილაკი მხოლოდ ერთი არის სწორი 
// random მომხმარებელმა უნდა დააჭიროს სწორ ღილაკს სწრაფად ბოლოს გამოიტანე სწორია თუ არა და დრო

let correct = Math.floor(Math.random() * 5);
let start = Date.now();

for (let i = 0; i < 5; i++) {
  let btn = document.createElement("button");
  btn.innerText = "Button " + (i + 1);

  btn.onclick = function() {
    let time = Date.now() - start;
    if (i === correct) {
      document.getElementById("result").innerText = "Correct! " + time + "ms";
    } else {
      document.getElementById("result").innerText = "Wrong! " + time + "ms";
    }
  };

}