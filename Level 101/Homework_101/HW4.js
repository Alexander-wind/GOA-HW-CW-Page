// შექმენი კლასი Student, რომელსაც კონსტრუქტორში ექნება name, surname და grade, და შექმენი 5 სტუდენტი მასივში.

class Student {
  constructor(name, surname, grade) {
    this.name = name;
    this.surname = surname;
    this.grade = grade;
  }
}

const students = [
  new Student("Zviad", "Gamsaxurdia", 95),
  new Student("Mixeil", "Saakashvili", 92),
  new Student("Salome", "Zurabishvi", 60),
  new Student("Aleksandre", "Kamashidze", 100),
  new Student("Bidzina", "Ivanishvili", 34)
];

console.log(students);