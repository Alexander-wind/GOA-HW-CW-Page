// შექმენით input ველი
// როცა დააკლიკებს, ფონური ფერი მწვანედ შეიცვალოს

const input4 = document.getElementById("input4");

input4.addEventListener("focus", () => {
  input4.style.backgroundColor = "lightgreen";
});