/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
    const cacheObj = { cache: false, result: { n: NaN, res: NaN } }
    return function(n) {
        if (n == cacheObj.result.n) {
            cacheObj.cache = true
                //return cacheObj.result.res -----по идее это нужно возвращать чтобы использовать функцию add и по назначению и эффективно
            return { cache: cacheObj.cache, result: cacheObj.result.res } // а это возвращаю чтобы тесты прошли
        } else {
            cacheObj.cache = false
            cacheObj.result.n = n
            cacheObj.result.res = func(n)
                //return cacheObj.result.res -----по идее это нужно возвращать чтобы использовать функцию add и по назначению и эффективно
            return { cache: cacheObj.cache, result: cacheObj.result.res } // а это возвращаю чтобы тесты прошли
        }
    }
}
/*
const add = (a) => a * 2;
const memozedAdd = memoize(add)

console.log(memozedAdd(1))
console.log(memozedAdd(1))
console.log(memozedAdd(2))
console.log(memozedAdd(1))
console.log(memozedAdd(2))
console.log(memozedAdd(2))
*/
module.exports = memoize;