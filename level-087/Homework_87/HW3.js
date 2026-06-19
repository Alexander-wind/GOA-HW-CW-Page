// გაქვს ორი ობიექტი:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 20, c: 3 };
// შექმენი ახალი ობიექტი მათი გაერთიანებით.
// დააკვირდი — რომელი b დარჩება საბოლოო ობიექტში?

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };

const obj3 = { ...obj1, ...obj2}

// meore b radgan redeklaracia xdeba
