// შექმენი input ველი
// აკრძალე ასოები A, B, C
// აკრძალე Shift-ის გამოყენება
// აკრძალული ასოს ან Shift-ის გამოყენებისას input-ს სურათი ან საზღვარი წითლად გამოჩნდეს
// keyup-ზე საზღვარი დაბრუნდეს ნორმალურ ფერში

const input6 = document.getElementById("input6");

input6.addEventListener("keydown", (e) => {
  if (["A","B","C"].includes(e.key) || e.shiftKey) {
    input6.classList.add("error");
    e.preventDefault();
  }
});

input6.addEventListener("keyup", () => {
  input6.classList.remove("error");
});