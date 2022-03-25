/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    //code here
    let complex = [];
    let c;
    let low=[];
    let massiv = [];
    let mas=[];
    let i;
    let index;
    for ( i = 0;  i < arr.length; i++){
        low[i] = arr[i].toLowerCase();
        mas[i] = low[i].split("");
        mas[i] = mas[i].sort();
        mas[i] = mas[i].join("");

    }
    let t = arr.length;
    let res=[];
    res.push(mas);
    for ( c = 0; c < arr.length; c++){
        if (mas.indexOf(mas[c])== c){


            for (index = 0; index < arr.length; index++)
            {


                if ( mas[c] == mas[index])
                {
                    massiv.push(arr[index]);


                }


            }
            complex.push(massiv);
            massiv=[];
        }
    }
    return complex;



}

module.exports = getAnagramms;
