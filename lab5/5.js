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
    let counter = {};
    for (let obj of arr) {
        counter[obj.from] ? counter[obj.from]++ : counter[obj.from] = 1;
        counter[obj.to] ? counter[obj.to]++ : counter[obj.to] = 1;
    }
    for (let key of Object.keys(counter)) {
        if (counter[key] < 2)
            continue;
        delete counter[key];
    }
    let result = [];
    result.push(arr.find((obj) => Object.keys(counter).includes(obj.from)));
    let curObj = result[0];
    while (!Object.keys(counter).includes(curObj.to)) {
        curObj = arr.find((obj) => obj.from === curObj.to);
        result.push(curObj);
    }
    return result;
}

module.exports = makeRoute;
/*console.log(makeRoute([
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]));*/