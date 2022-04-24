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
    //code here
    return function curry1(...arg){
        if (arg.length >= f.length)
            return f(...arg);
        else {
            return function(...nextArg){
                return curry1(...arg.concat(nextArg));
            }
        }
    }
}

module.exports = curry;
