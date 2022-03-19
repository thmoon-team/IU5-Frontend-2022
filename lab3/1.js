/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    // code here
    let mas = str.split(" ");

    for (let num = 0; num < mas.length; num++ )
    {
        let word = "";
        let text = mas[num];
        let firstSymbol = text[0];
        for (let index = 1; index < text.length; index++){
            word = word + text[index];
        }
        text= firstSymbol.toUpperCase() + word;
        mas[num] = text;
    }
    str = mas.join(" ");
    return str;
}

module.exports = capitalize;
