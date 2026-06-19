// შექმენი თამაში სადაც ეკრანზე ჩნდება რიცხვები არეულად 1 დან 10 მდე მომხმარებელმა უნდა დააჭიროს სწორ რიგში ბოლოს გამოიტანე დრო და შეცდომები.

let numbers = [...Array(10).keys()].map(x => x + 1);
numbers.sort(() => Math.random() - 0.5);

let current = 1;
let errors = 0;
let start = Date.now();

numbers.forEach(num => {
  let btn = document.createElement("button");
  btn.innerText = num;

  btn.onclick = function() {
    if (num === current) {
      current++;
      btn.disabled = true;

      if (current > 10) {
        let time = Date.now() - start;
        document.getElementById("result").innerText =
          "Done! " + time + "ms | Errors: " + errors;
      }
    } else {
      errors++;
    }
  };
});