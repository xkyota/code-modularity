import {add} from "./calculator/sum.js"
import { subtract } from "./calculator/subtract.js";
import { multiply } from "./calculator/multiply.js";
import {divide} from "./calculator/divide.js"; 
import { printResult } from "./calculator/printResult.js";

let a = 10;
let b = 5;

let sum = add(a, b);

let difference = subtract(a, b);

let product = multiply(a, b);

let quotient = divide(a, b);

printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);