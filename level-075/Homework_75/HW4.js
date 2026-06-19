// შექმენი input ველი
// ყოველი keyup-ზე გაჩვენდეს ტექსტი „You typed X characters“
// თუ დაიკრიფა 5 ან მეტი ასო, ტექსტის ფერი წითლად უნდა შეიცვალოს

const input2 = document.getElementById("input2");
const counter = document.getElementById("counter");

input2.addEventListener("keyup", () => {
  let len = input2.value.length;

  counter.textContent = "You typed " + len + " characters";
  counter.style.color = len >= 5 ? "red" : "black";
});