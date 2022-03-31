/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    //code here
    str_1 = str.split("").reverse().join("");
    return str_1 == str;
}

module.exports = isPalindrome;
