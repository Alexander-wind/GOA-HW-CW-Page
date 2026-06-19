// შექმენი Employee კლასი, რომელსაც ექნება ხელფასი (salary) და მეთოდი, რომელიც დააკლებს 20% გადასახადს და დააბრუნებს სუფთა ხელფასს.

class Employee {
  constructor(salary) {
    this.salary = salary;
  }

  getNetSalary() {
    return this.salary * 0.8; 
  }
}