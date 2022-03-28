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
function curry(f) {
    let argsArray = []

    return function func(...args) {
        argsArray = [...argsArray, ...args]

        if (argsArray.length > 3) return
        else if (argsArray.length === 3) return f(argsArray[0], argsArray[1], argsArray[2])
        return func
    }
}

module.exports = curry;