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

function curry(f) 
{
    return func = (...args) => {
        if (args.length >= f.length)
            return f(...args);
        else 
            return (...addArgs) => 
                func.apply(this, args.concat(addArgs));
    };
}

module.exports = curry;
