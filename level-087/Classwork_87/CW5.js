//  გაქვს ორი obj

// გააერთიანე ისინი ერთ obj-ად spread-ის გამოყენებით.

const obj = {a:1, b: 2, c:3};
const obj1 = {d:4, e:5, f:6,};
const obj2 = {...obj, ...obj1}