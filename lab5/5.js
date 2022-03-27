/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    let result=[];
    for (const el of arr){
        if (arr.every(el2=>el.from!==el2.to)){
             result.push(el);
             break;
        };
    };
    while (result.length<arr.length){
        for (line of arr){
            if (line.from===result[result.length-1].to){
                result.push(line);
                break;
            }
        }
    }
    return result;
}

module.exports = makeRoute;
