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
    let context = {args: [], result: 0, func: func, 
        run(...args) {
            if (this.args && args.every((value, index) => value === this.args[index]))
                return {cache: true, result: this.result};
            this.result = func(...args);
            this.args = args;
            return {cache: false, result: this.result};
        }}
    return context.run;
}

module.exports = memoize;
/*const add = (a) => a * 2;
const memozedAdd = memoize(add);
console.log(memozedAdd(1));
console.log(memozedAdd(1));
console.log(memozedAdd(2));
console.log(memozedAdd(1));
console.log(memozedAdd(2));
console.log(memozedAdd(2));*/