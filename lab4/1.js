/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let t_arr = JSON.parse(JSON.stringify(arr));
    let ans = [];
    let t_ans = [];
    for (let i = 0; i < t_arr.length; ++i) {
        t_arr[i] = t_arr[i].toLowerCase();
        t_arr[i] = t_arr[i].split("");
        t_arr[i] = t_arr[i].sort();
        t_arr[i] = t_arr[i].join("");
    }

    for (let i = 0; i < t_arr.length; ++i) {
        if (t_arr.indexOf(t_arr[i]) == i) {
            for (let j = 0; j < t_arr.length; ++j) {
                if (t_arr[i] == t_arr[j]) {
                    t_ans.push(arr[j]);
                }
            }
            ans.push(t_ans);
            t_ans = [];
        }
    }
    return ans;
}

module.exports = getAnagramms;