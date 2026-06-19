// შექმენი class Student, რომლის constructor იღებს name, ხოლო grade-ს აყენებს default-ად 0.

class Student {
  constructor(name, grade = 0) {
    this.name = name;
    this.grade = grade;
  }
}