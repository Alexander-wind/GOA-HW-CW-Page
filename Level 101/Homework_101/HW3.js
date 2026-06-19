// შექმენი კლასი Book, სადაც კონსტრუქტორი მიიღებს title, author და pages, შემდეგ შექმენი ერთი წიგნი და დაბეჭდე მისი ყველა თვისება.

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

const book1 = new Book("1984", "George Orwell", 328);

console.log(book1);