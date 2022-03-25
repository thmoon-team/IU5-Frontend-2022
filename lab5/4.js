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

function memoize(obj) {
    if (typeof obj === 'function') {
        this.func = obj
        return memoize
    } else if (typeof obj === 'number') {
        const num = this.func(obj)
        if (num === this.result) {
            this.cache = true
        } else {
            this.cache = false
            this.result = num
        }
    }
    return { cache: this.cache, result: this.result }
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