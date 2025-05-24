// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];

// function convert(arr) {
//   let names = [];
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     names.push(arr[i].name);
//   }
//   console.log(names);
// }
// convert(fruts);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let res = prompt('введіть число більше за 100');
//   if (res === '') {
//     alert('порожній рядок');
//     break;
//   }
//   if (res == null) {
//     alert('ви скасували ввід');
//     break;
//   } else {
//     let num = Number(res);
//     if (Number.isNaN(num)) {
//       alert('ви не ввели число');
//     } else {
//       if (num >= 100) {
//         alert(`ви ввели число ${num}`);
//         break;
//       } else {
//         alert('ви ввели число меншe 100');
//       }
//     }
//   }
// }

// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
//   { age: 24, name: 'Оля' },
//   { age: 2, name: 'Аня' },
//   { age: 15, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];

// let averngeAge = 0;
// for (let i = 0; i < girls.length; i++) {
//   averngeAge += girls[i].age;
// }
// console.log(averngeAge / girls.length);
