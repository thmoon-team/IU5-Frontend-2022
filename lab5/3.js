/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b2})() -> 3
 * cкорее всего имелось ввиду это: customBind(function() { return this.a + this.b }, { a: 1, b: 2 })()
 */

function customBind(f, context) {
    this.__proto__ = context
    newFunc = function(n) {
        return f(n)
    }
    return newFunc
}



//console.log(customBind(function(n) { return this.a + this.b + n }, { a: 1, b: 2 })(6))


module.exports = customBind;