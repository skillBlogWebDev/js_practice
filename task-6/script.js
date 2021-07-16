/**
 Генератор массивов длиной count со случайными числами от n до m.
 */

let array = [];
let n = 10;
let m = 20;
let count = 15;

for (let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * (m - n) + n));
}

console.log(array);