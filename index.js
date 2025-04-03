import { average } from "./js-modules/average.js";
import { sum } from "./js-modules/sum.js";
import stringToArray from './js-modules/string-to-array.js';
import { max } from "./js-modules/max-number.js";

const numbers = [1, 2, 3, 4, 5];
const avg = average(numbers);
console.log(`Average: ${avg}`);


const result = sum(numbers);
console.log(`Sum: ${result}`);


const str = 'one,two,three,four,five';
const separator = ',';
const result2 = stringToArray(str, separator);
console.log(`Result: ${result2}`);

const result3 = max(numbers);
console.log(`Max: ${result3}`);

