// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let forest = ["oak", "pine", "birch", "maple", "willow", "acacia", "chestnut", "poplar", "spruce", "elm"];
console.log (forest[0]);
console.log (forest[1]);
console.log (forest[2]);
console.log (forest[3]);
console.log (forest[4]);
console.log (forest[5]);
console.log (forest[6]);
console.log (forest[7]);
console.log (forest[8]);
console.log (forest[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Harry Potter',
    pageCount: 600,
    genre: 'novel, fantasy'
};
let book2 = {
    title: 'Master and Margarita',
    pageCount: 500,
    genre: 'novel'
};
let book3 = {
    title: 'Ten little nigers',
    pageCount: 260,
    genre: 'detective novel'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let book4 = {
    title: 'Двенадцать стульев',
    pageCount: 300,
    genre: 'novel',
    authors: [
        {name: "Илья Ильф", age: 40},
        {name: "Евгений Петров", age: 40}
    ]
};
let book5 = {
    title: 'За миллиард лет до конца света',
    pageCount: 100,
    genre: 'novel, fantasy',
    authors: [
        {name: "Борис Стругацкий", age: 40},
        {name: "Аркадий Стругацкий", age: 40}
    ]
};
let book6 = {
    title: 'Золотой теленок',
    pageCount: 300,
    genre: 'novel',
    authors: [
        {name: "Илья Ильф", age: 40},
        {name: "Евгений Петров", age: 40}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let users = [
    {name: "Vasya", username: "Vasya1", password: "qwert"},
    {name: "Vasya", username: "Vasya1", password: "nnhygfdf"},
    {name: "Petya", username: "Petya1", password: "dfgjhkjl"},
    {name: "Kolya", username: "Kolya1", password: "cvghuji"},
    {name: "Vania", username: "Vania1", password: "wedfvb"},
    {name: "Misha", username: "Misha1", password: "pkjbm"},
    {name: "Volodya", username: "Volodya1", pasword: "ytfdxzsdf"}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
