// შექმენი input ველი
// როცა დააკლიკებს, ფონური ფერი მწვანედ უნდა შეიცვალოს
// დაემატოს ჩრდილი shadow

const input4 = document.getElementById("input4");

input4.addEventListener("focus", () => {
  input4.style.backgroundColor = "lightgreen";
  input4.style.boxShadow = "0 0 10px green";
});