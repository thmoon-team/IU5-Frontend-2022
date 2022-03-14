/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */




function capitalize(str) {
    // code here

    let words = str.split(" ");
    let newText = "";
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        newText += words[i];
        if (i != words.length - 1)
        newText += " ";
    }
    return newText;
}



module.exports = capitalize;
