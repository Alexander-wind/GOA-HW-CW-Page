// შექმენი თამაში სადაც თავიდან წერია Don’t Click თუ მომხმარებელი დააჭერს 
// წააგებს ცოტა ხანში ტექსტი შეიცვლება Click NOW მომხმარებელმა უნდა დააჭიროს სწრაფად ბოლოს გამოიტანე დრო

let start = Date.now();
let ready = false;

setTimeout(() => {
  document.getElementById("text").innerText = "CLICK NOW!";
  start = Date.now();
  ready = true;
}, 2000);

function clickGame() {
  if (!ready) {
    document.getElementById("result").innerText = "You lost!";
  } else {
    let time = Date.now() - start;
    document.getElementById("result").innerText = "Time: " + time + "ms";
  }
}