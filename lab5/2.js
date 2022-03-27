/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */

function add(a, b, c) {
    return a + b + c;
}

function curry(f) {
    let len = f.length;
    return function first(...args) {
        if (args.length === len) return f(...args); 
        return function(...args2) {
            return first(...(args.concat(args2)));
        };
    }
}

module.exports = curry;
console.log(curry(add)(1)(2)(3)); //6