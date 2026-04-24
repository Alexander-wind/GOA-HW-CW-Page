// შექმენით input ველი
// აკრძალეთ ასოები: a, b, c
// დანარჩენი ასოები აკრეფას შეძლებენ

const input1 = document.getElementById("input1");

input1.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "b" || e.key === "c") {
    e.preventDefault();
  }
});