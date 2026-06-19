// შექმენით input ველი
// როცა დატოვებს input-ი, ფონური ფერი ვარდისფრად შეიცვალოს.

const input5 = document.getElementById("input5");

input5.addEventListener("blur", () => {
  input5.style.backgroundColor = "pink";
});