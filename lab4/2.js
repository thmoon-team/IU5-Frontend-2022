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
    for (var i = 0, n = str.length - 1; i < n; i++, n--) {
        if(str[i] != str[n])
          return false;
   }
   return true;
}

module.exports = isPalindrome;
