// შექმენით ფუნქცია, რომელიც იღებს მასივს შემდეგი სტრუქტურით:
// [
// { title: "JS", lessons: 20 },
// { title: "React", lessons: 35 },
// { title: "Node", lessons: 25 }
// ]
// Destructuring-ის გამოყენებით:
// პირველი კურსიდან აიღეთ title და lessons
// მეორე კურსიდან აიღეთ მხოლოდ title (rename გააკეთეთ secondCourseName)
// მესამე კურსიდან აიღეთ lessons და მიეცით default მნიშვნელობა 0
// ფუნქციამ უნდა დაბეჭდოს ყველა მიღებული მნიშვნელობა.

function getCourses(courses) {
  const [
    { title, lessons },
    { title: secondCourseName },
    { lessons: thirdLessons = 0 }
  ] = courses;

  console.log(title);
  console.log(lessons);
  console.log(secondCourseName);
  console.log(thirdLessons);
}

getCourses([
  { title: "JS", lessons: 20 },
  { title: "React", lessons: 35 },
  { title: "Node", lessons: 25 }
]);