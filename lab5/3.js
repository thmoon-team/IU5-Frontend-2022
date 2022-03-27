/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b: 2})() -> 3
 */

function customBind(f, context) {
    return f.bind(context)
}

module.exports = customBind;
