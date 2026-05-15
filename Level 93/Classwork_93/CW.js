import {max, min} from './CW1.js'
import { double, triple} from './CW2.js'
import greet from './CW3.js'
import { farewell } from './CW3.js'
import { toUpper, toLower } from './CW4.js'
import { addition, subtraction } from './CW5.js'


const nums = [1,2,3,4,6,7,7,8,9,10]
const name = 'Alex'
const text = 'HelloWorld'
const a = 15
const b = 12

console.log(max([nums]))
console.log(min([nums]))

console.log(double(2))
console.log(triple(5))

console.log(greet(name))
console.log(farewell(name))

console.log(toLower(text))
console.log(toUpper(text))

console.log(addition(a,b))
console.log(subtraction(a,b))