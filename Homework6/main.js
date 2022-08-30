// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// let str1 ='lorem ipsum';
// let str2 = 'javascript is cool';
//
// console.log(str.length, str1.length, str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(str.toUpperCase());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str3 = 'HELLO WORLD';
// let str4 ='LOREM IPSUM';
// let str5 = 'JAVASCRIPT IS COOL';
//
// console.log(str3.toLowerCase());
// console.log(str4.toLowerCase());
// console.log(str5.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// let arr = str.split(' '); //  my resolve без функції
// console.log(arr);
//
// const stringToArray = (arr)=>str.split(' ');   //  resolve in class з функцією
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві
// на стрінгові.

// let arr =[10,8,-7,55,987,-1011,0,1050,0];
// let str = arr.map (item=>item.toString());
// console.log(str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') { arr.sort((a,b)=>a-b);
//     } else if (direction === 'descending') { arr.sort((a,b)=>b-a);
//     }
//     return arr;
// }
// console.log(sortNums (nums, 'ascending'));
// console.log(sortNums (nums, 'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]

// let courses = coursesAndDurationArray.sort((item1, item2) =>
//     item2.monthDuration-item1.monthDuration);

// courses.forEach (function course (item){     // my previous resolve
//     if (item.monthDuration>5) {
//         console.log(item);
//     }
// });

// console.log (courses.filter(item => item.monthDuration > 5));    // resolve in class



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }