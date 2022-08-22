// // Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let array =[];
// let user1 = new User(14, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user2 = new User(15, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user3 = new User(22, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user4 = new User(8, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user5 = new User(11, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user6 = new User(34, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user7 = new User(12, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user8 = new User(9, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user9 = new User(10, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
// let user10 = new User(18, 'Anna', 'Petrenko', 'dfgh@jk', 34567);
//
// array.push(user1,user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(array);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter (user => user.id%2===0);
// console.log (filter);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = array.sort ((user1,user2) => user1.id - user2.id);
// console.log(sort);

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// // товарів) створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order ) {
//     this.id = id;
//     this.name = name;
//     this.surname =surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// }
// let array = [];
// let client1 = new Client(9, 'Victoria', 'Ivanova','fghj8567',234567,[2,4,3,12,41]);
// let client2 = new Client(12, 'Victoria', 'Ivanova','fghj8567',234567,[4,5,6,1]);
// let client3 = new Client(12, 'Victoria', 'Ivanova','fghj8567',234567,[8,3,6,20]);
// let client4 = new Client(1, 'Victoria', 'Ivanova','fghj8567',234567,[2]);
// let client5 = new Client(12, 'Victoria', 'Ivanova','fghj8567',234567,[23,5,9]);
// let client6 = new Client(12, 'Victoria', 'Ivanova','fghj8567',234567,[2,12,78,3]);
// let client7 = new Client(12, 'Victoria', 'Ivanova','fghj8567',234567,[4,2,12,5]);
// let client8 = new Client(2, 'Victoria', 'Ivanova','fghj8567',234567,[0,3,6]);
// let client9 = new Client(12, 'Victoria', 'Ivanova','fghj8567',234567,[2,38,98,21]);
// let client10 = new Client(10, 'Victoria', 'Ivanova','fghj8567',234567,[9,56,3,4,62,34,7]);
//
// array.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(array);
// //
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sort = array.sort ((a,b)=> a.order.length-b.order.length);
// console.log(sort);

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
//
// function Car (model, producer, year, maxSpeed, enVolume ){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.enVolume = enVolume;
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину` );
//     };
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         for (const item in this) {
//      if (typeof this [item] !== "function") {
//          console.log (`${item}: ${this[item]} `);
//      }
//  }
//     };
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed+=newSpeed;
//     }
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//        this.driver = driver;
//     }
//
// }
// let car = new Car('toyota','Korea',2019,200, 3.6);
// console.log (car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// car.addDriver({name:'Ivan', age:22 });

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// // швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// class Car {
//     constructor(model, producer, year, maxSpeed, enVolume ) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.enVolume = enVolume;
//     }
//
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину` );
//     };
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//     info () {
//             for (const item in this) {
//                 if (typeof this [item] !== "function") {
//                     console.log (`${item}: ${this[item]} `);
//                 }
//             }
//     }
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed+=newSpeed;
//     }
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car('toyota','Korea',2019,200, 3.6);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// car.changeYear(2018);
// car.addDriver({name:'Andriy', age:25 });
// console.log(car);


// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderellas = [];
// let cinderella1 = new Cinderella("Katya", 18, 36);
// let cinderella2 = new Cinderella("Katya", 18, 35);
// let cinderella3 = new Cinderella("Katya", 18, 34);
// let cinderella4 = new Cinderella("Katya", 18, 38);
// let cinderella5 = new Cinderella("Lesya", 18, 37);
// let cinderella6 = new Cinderella("Katya", 18, 39);
// let cinderella7 = new Cinderella("Katya", 18, 40);
// let cinderella8 = new Cinderella("Katya", 18, 38.5);
// let cinderella9 = new Cinderella("Katya", 18, 36.5);
// let cinderella10 = new Cinderella("Katya", 18, 37.7);
//
// cinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,
//     cinderella9,cinderella10);


// class Prince {                                         //мой вариант
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }
//
// let prince = new Prince('Ivan', 25, 37);
//
// for (const person of cinderellas) {
//     if (person.footSize === prince.shoesSize) {
//         console.log (`${person.name} is my cinderella`)
//     } ;
// }


// class Prince extends Cinderella{                         //вариант в класе
//     constructor(name, age, shoesSize) {
//         super(name,age);
//         this.shoesSize = shoesSize;
//     }
// }
//
// let prince = new Prince('Ivan', 25, 37);
//
// let princess = (cinderellas,prince)=>{
//     for (const person of cinderellas) {
//       if (prince.shoesSize===person.footSize) {
//           return `${person.name} is my cinderella`
//       }
//     }
// }
// console.log (princess(cinderellas,prince));

// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let princess = cinderellas.find(person=>person.footSize === prince.shoesSize);
// console.log (princess);