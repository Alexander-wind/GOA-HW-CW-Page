// შექმენით პატარა ყუთი (div) „Hover me“
//მაუსი რომ გავა ყუთიდან, ფერი წითელი გახდეს

const box = document.getElementById("box");

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "red";
});