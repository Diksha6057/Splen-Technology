export const PI = 3.14;
export const APP_NAME = "NodeJS";
export const VERSION = "1.0";
export const MAX_USERS = 100;
export const IS_ACTIVE = true;

export function greet() {
    return "Hello!";
}

export function sayBye() {
    return "Good Bye!";
}

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

export function square(num) {
    return num * num;
}

export function cube(num) {
    return num * num * num;
}

export function isEven(num) {
    return num % 2 === 0;
}

export function isOdd(num) {
    return num % 2 !== 0;
}