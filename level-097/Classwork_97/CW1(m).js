// import { sum } from "./CW1(l).js";

// export function add(a, b) {
//     logSum(a, b);
//     return a + b;
// }


import { add } from "./CW1(u).js";
import { log } from "./CW1(l).js";

export function addAndLog(a, b) {
  const result = add(a, b);
  log("Sum is: " + result);
  return result;
}