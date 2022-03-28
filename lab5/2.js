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
function curry(func) {
    let arr = []

    nextCurry = function(...args) {
        arr = arr.concat(args)
        if (arr.length >= func.length) {
            return func.apply(this, arr)
        } else {
            return nextCurry
        }
    }

    return nextCurry
}


/*
function add(a, b, c) {
    return a + b + c;
}

console.log(curry(add)(1)(2)(3)); //6
console.log(curry(add)(1)(2, 3)); //6
console.log(curry(add)(1, 2, 3)); //6
*/
module.exports = curry;