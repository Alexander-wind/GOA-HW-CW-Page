// შექმენი div „Hover me too“
// როცა მაუსი div-ზე გავა, ფერი უცებ ვერ შეიცვლება
// როცა მაუსი div-დან გავა, ფერი ციკლურად შეიცვალოს წინასწარ ჩაწერილი ფერების სიიდან (მაგ: purple → teal → brown → blue → green)
// ყოველშემდეგ mouseleave-ზე ჩართულ ფერს დაუმატე შემდეგი ფერი სია.

const box2 = document.getElementById("box2");
const colors = ["purple","teal","brown","blue","green"];
let i = 0;

box2.addEventListener("mouseleave", () => {
  box2.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
});