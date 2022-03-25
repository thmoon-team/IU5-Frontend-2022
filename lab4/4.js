/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    //code here
    let res =[];
    let c= 0;
    for (let i =0 ;i < arr.length;i++){
        if (Array.isArray(arr[i])){
            res = res.concat(get1DArray(arr[i]));
        }
        else {
            res.push(arr[i]);
        }
    }
    return res;
}

module.exports = get1DArray;
