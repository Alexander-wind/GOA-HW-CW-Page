// მოცემულია წიგნების ავტორების მასივი. დაწერეთ პროგრამა, რომელიც დააჯგუფებს ავტორებს და დაითვლის 
// რამდენი წიგნი აქვს თითოეულ ავტორს. შედეგი შეინახეთ ობიექტში. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const authors = ["King", "Rowling", "King", "Tolkien", "Rowling", "King"];

const authorCount = authors.reduce((acc, author) => {
  acc[author] = (acc[author] || 0) + 1;
  return acc;
}, {});

console.log(authorCount);
