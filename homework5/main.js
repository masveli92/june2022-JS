// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle (a,b){
    res=a*b;
    return res;
}
console.log (rectangle (15,10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle (r){
    res=3.14*r**2;
    return res;
}
 console.log( circle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

 function cylinder (h,r) {
     res=2*3.14*r*(h+r);
     return res;
 }
console.log( cylinder(4,2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let any = ["Anna", 24, 56, true, 18, 92, 3, "Victor", false, 18];

function arrayPrinter (array) {
    for (i = 0; i <= array.length-1; i++) {
        console.log (array[i]);
    }
}
arrayPrinter(any);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph (text) {
    document.write(`<p>${text}</p>`);
}
paragraph (`Any text you want`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function li (text) {
    document.write(`<ul>`)
    for (i = 0; i <= 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
li (`something here`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list (text, n) {
    document.write(`<ul>`)
    for (i = 0; i <= n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
list (`Any text`, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function element (array) {
    document.write(`<ul>`)
    for (i = 0; i <= array.length-1; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
element(any);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.

let users = [
    {id: 11, name: 'vasa', age: 31},
    {id: 12, name: 'petya', age: 30},
    {id: 13, name: 'kolya', age: 29},
    {id: 14, name: 'olha', age: 28},
    {id: 15, name: 'max', age: 30}
]

function block (array) {
for (const item of array){
    console.log (item);
}
}
block (users);

// - створити функцію яка повертає найменьше число з масиву
let example= [1, 2, 10, -2, 27, 54, 16, 9, -6, 3, -24 ];

function minimum(array) {
   let min=0;
   for (i=0; i<=array.length-1; i++) {
       if (min >= array[i]) {
           min= array[i];
       }
   }
    return min;
}
console.log(minimum(example));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function suma (array) {
let sum=0;
    for (i=0; i<=array.length-1; i++) {
        sum +=array[i];
            }
    return sum;
}
console.log(suma(example));
