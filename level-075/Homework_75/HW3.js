// შექმენი input ველი
// აკრძალე ასოები a, b, c
// აკრძალე ციფრები 1, 2, 3
// დანარჩენი ასოები და ციფრები აკრეფისთვის მისაღებია
// აკრძალულ ასოს ან ციფრს აკრეფის შემთხვევაში გამოჩნდეს alert

const input1 = document.getElementById("input1");

input1.addEventListener("keydown", (e) => {
  const forbidden = ["a","b","c","1","2","3"];

  if (forbidden.includes(e.key.toLowerCase())) {
    e.preventDefault();
    alert("Not allowed!");
  }
});