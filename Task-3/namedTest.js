import {
    PI,
    APP_NAME,
    VERSION,
    MAX_USERS,
    IS_ACTIVE,
    greet,
    sayBye,
    add,
    subtract,
    multiply,
    divide,
    square,
    cube,
    isEven,
    isOdd
} from "./namedExport.js";

console.log("NAMED EXPORTS");

console.log(PI);
console.log(APP_NAME);
console.log(VERSION);
console.log(MAX_USERS);
console.log(IS_ACTIVE);

console.log(greet());
console.log(sayBye());

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(10, 2));

console.log(square(4));
console.log(cube(3));

console.log(isEven(10));
console.log(isOdd(7));