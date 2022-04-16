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
 const add = (a) => a * 2;
 const memozedAdd = memoize(add)

function memoize(func) {
    let result;
    return f = (...args) => 
    {
        const  cache= (result === func(...args));
        result = func(...args);
        return { 'cache': cache, 'result': result };
    };
}

module.exports = memoize;
