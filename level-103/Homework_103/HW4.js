// შექმენი თამაში სადაც ღილაკი მოძრაობს ეკრანზე მომხმარებელმა 
// უნდა დააჭიროს რაც შეიძლება ბევრჯერ თამაში გრძელდება 5 წამი ბოლოს გამოიტანე რამდენჯერ დააჭირა

let count = 0;
let btn = document.getElementById("btn");

btn.onclick = () => count++;

function move() {
  btn.style.left = Math.random() * 300 + "px";
  btn.style.top = Math.random() * 150 + "px";
}

let interval = setInterval(move, 300);

setTimeout(() => {
  clearInterval(interval);
  document.getElementById("result").innerText =
    "Clicks: " + count;
}, 5000);