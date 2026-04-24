// შექმენით input ველი
// ტექსტის აკრეფის შემდეგ (ყოველ ღილაკის გაშვებისას)
// გამოჩნდეს: „You typed X characters“

const input2 = document.getElementById("input2");
const textCount = document.getElementById("textCount");

input2.addEventListener("keyup", () => {
  textCount.textContent = "You typed " + input2.value.length + " characters";
});