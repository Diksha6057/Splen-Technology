import greet from "./default1.js";
import sayBye from "./default2.js";
import add from "./default3.js";
import subtract from "./default4.js";
import multiply from "./default5.js";
import divide from "./default6.js";
import square from "./default7.js";
import cube from "./default8.js";
import isEven from "./default9.js";
import isOdd from "./default10.js";
import getMax from "./default11.js";
import getMin from "./default12.js";
import toUpper from "./default13.js";
import toLower from "./default14.js";
import getLength from "./default15.js";

console.log("DEFAULT EXPORTS");

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

console.log(getMax(10, 20));
console.log(getMin(10, 20));

console.log(toUpper("nodejs"));
console.log(toLower("NODEJS"));

console.log(getLength("JavaScript"));