/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
    // code here
    let last = arr[arr.length - 1];
    let sum = 0;
    for(let num = 0; num < arr.length; num+=2 )
    {
        sum+=arr[num];
    }
    return sum*last;
}

module.exports = prettySum;
