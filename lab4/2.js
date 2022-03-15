/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let check = 1;
    for (let i = 0; i <= str.length / 2; ++i) {
        if (str[i] != str[str.length - 1 - i]) {
            check = 0;
        }
    }
    return Boolean(check);
}

module.exports = isPalindrome;