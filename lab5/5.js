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
    //code here
    let arrReady =[];
    //let arrReady;
    let prev;
    let check = 0;
    for (let i=0; i <arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i].from == arr[j].to){
                check++;
            }
        }
        if (check ==0){
            arrReady.push(arr[i]);
            prev = arr[i].to
        }
        check = 0;
    }
    for (let i=0; i <arr.length; i++){
        for( j =0 ; j < arr.length; j++){
            if (prev == arr[j].from){
                arrReady.push(arr[j]);
                prev = arr[j].to;
            }

        }
    }
    return arrReady;
}

module.exports = makeRoute;
