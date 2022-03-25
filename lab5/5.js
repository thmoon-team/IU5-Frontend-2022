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
    const helpObj = {}
    const newArr = []
    arr.map(function(x) {
        helpObj[x['from']] = x['to']
    })
    const arrValues = Object.values(helpObj)
    const arrKeys = Object.keys(helpObj)
    for (let key of arrKeys) {
        if (!arrValues.includes(key)) {
            for (let i = 0; i < arrKeys.length; ++i) {
                newArr.push({ 'from': key, 'to': helpObj[key] })
                key = helpObj[key]
            }
            break
        }
    }
    return newArr
}
/*
console.log(
    makeRoute(
        [
            { from: 'L', to: 'M' },
            { from: 'M', to: 'N' },
            { from: 'A', to: 'L' },
            { from: 'B', to: 'A' },
            { from: 'N', to: 'Z' },
        ]
    )
)
*/
module.exports = makeRoute;