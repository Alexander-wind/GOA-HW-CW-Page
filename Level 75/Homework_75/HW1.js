// შექმენი div „Hover me“
//როცა მაუსი გავა div-ის ზონიდან, ფერი წითელი გახდება
//როცა მაუსი დაბრუნდება, ფერი ისევ ნორმალური იქნება

const box1 = document.getElementById("box1");

box1.addEventListener("mouseleave", () => {
  box1.style.backgroundColor = "red";
});

box1.addEventListener("mouseenter", () => {
  box1.style.backgroundColor = "lightblue";
});