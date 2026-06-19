// შექმენი input ველი
// როცა აკრეფა დასრულდა და კურსორი გავა input-იდან, გამოჩნდეს alert „Name changed!“
// ტექსტი ავტომატურად გადაიქცეს დიდი ასოებში uppercase

const input3 = document.getElementById("input3");

input3.addEventListener("change", () => {
  input3.value = input3.value.toUpperCase();
  alert("Name changed!");
});