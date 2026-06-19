import {add, mul} from './CW1-1.js'
import {min, max,} from './CW2.js'
import greet from './CW3.js'
import user, { sayHello, getAge } from "./CW4.js";
import { PI, APP_NAME, VERSION } from "./CW5.js";

console.log(add(5,5));
console.log(mul(5,5));

console.log(min(1,2));
console.log(max(1,2));
console.log(max(1,2));

console.log(greet('Alex'));

console.log(user);
console.log(sayHello()); 
console.log(getAge(user.age));

console.log(PI);        
console.log(APP_NAME);  
console.log(VERSION);   