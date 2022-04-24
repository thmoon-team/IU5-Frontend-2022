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
    //code here
    let cache = {};
    return function(arg){
        if (arg in cache){
            let cacheT = true;
            return {cache: cacheT, result: cache[arg]}
        }
        else{
            cache = {};
            cache[arg]=func(arg)
            let cacheF = false;
            return{ cache: cacheF, result: cache[arg]}

        }
    }
}

module.exports = memoize;
