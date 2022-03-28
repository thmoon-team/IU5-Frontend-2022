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
    return function curryNew(...args1) {
        if (args1.length >= f.length) 
          return f.apply(this, args1);
        else 
          return function(...args2) {
            return curryNew.apply(this, args1.concat(args2));
          }
      };
}

module.exports = curry;
