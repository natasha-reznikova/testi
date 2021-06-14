// // Задание 1. Прототип объекта и метод Object.create()


// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(child.hasOwnProperty('name'))
// console.log(child.hasOwnProperty('age'))
// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(child.hasOwnProperty('surname'));
// console.log(child.hasOwnProperty('heritage'));
// console.log(parent.isPrototypeOf(child));


// // Задание 2. Задача. Цепочка прототипов

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// console.log(parent.isPrototypeOf(child));
// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(ancestor.isPrototypeOf(parent));
// console.log(child.hasOwnProperty('surname'))
// console.log(child.hasOwnProperty('surname'));
// console.log(ancestor.hasOwnProperty('surname'));
// console.log(ancestor.hasOwnProperty('heritage'));


// // Задание 3. Функция-конструктор

// function Car(brand, model, price) { 
// this.brand = brand;
// this.model = model;
// this.price = price;}

// const car = new Car()

// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700))


// // Задание 4. Объект настроек

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const car1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 })
// const car2 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })

// console.log(car);
// console.log(car1);
// console.log(car2);

// // Задание 5. Свойство prototype
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//     return this.price
// }

// Car.prototype.changePrice = function (newPrice) {
// this.price = newPrice
// }

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(Car.price);
// console.log(changePrice(35000));


// // Задание 6. Задача. Хранилище
// function Storage(items) {
// this.items = items;
// }


// Storage.prototype.getItems = function() {
// return this.items}

// Storage.prototype.addItem = function(newItem) {
// return this.items.push(newItem);
// }

// Storage.prototype.removeItem = function(item) {
// const index = this.items.indexOf(item);
// this.items.splice(index, 1);}


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// // Задание 7. Задача. Хранилище
// function StringBuilder(baseValue ) {
// this.value = baseValue;
// }


// StringBuilder.prototype.getValue = function() {
// return this.value}

// StringBuilder.prototype.padEnd = function(str) {
//     return this.value = this.value + str;
// }

// StringBuilder.prototype.padStart = function(str) {
//     return this.value = str + this.value;
// }

// StringBuilder.prototype.padBoth = function(str) {
//     return this.value = str + this.value + str;
// }


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='



// // Задание 7.  Объявление класса
// class Car {}



// // Задание 8.  Конструктор класса

// class Car {
// brand;
// model;
// price;
// // можно их не объявлять в теле

// constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// }

// const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const car1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });

// console.log(car);
// console.log(car1)


// // Задание 10.  Методы класса

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

// getPrice() {
// return this.price;
// }

// changePrice(newPrice) {
// return this.price = newPrice;
// }

// }

// const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(car.getPrice())
// console.log(car.changePrice(35000))


// // Задание 11. Приватные свойства
// class Car {
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

// getBrand() {
// return this.#brand;
// }

// changeBrand(newBrand) {
//  return this.#brand = newBrand;
// }
// }

// const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const car1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const car2 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })
// console.log(car);
// console.log(car1);
// console.log(car2);


// // Задание 12. Задача. Хранилище 2.0
// class Storage {
//     #items;

//     constructor(items) {
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     };
//     addItem(newItem) {
//         return this.#items.push(newItem)
//     };
//     removeItem(item) {
//         const itemIndex = this.#items.indexOf(item);
//          this.#items.splice(itemIndex, 1);
//     };
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// // Задание 13. Задача. Хранилище 2.0

// class StringBuilder {
// #value;

// constructor (value) {
// this.#value = value;
// } 


// getValue() {
//   return this.#value;
// };

// padEnd(str) {
//   this.#value += str;
// };

// padStart(str) {
//   this.#value = str + this.#value;
// };

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// // Задание 14. Статические свойства



// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
// }


// // Задание 15. Статические свойства

// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;

//     constructor(price) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//    set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//     return this.#price;
//   }
//         // Пиши код выше этой строки
//     }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// // Задание 16. Статические свойства
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// static checkPrice(price) {
// if (price > Car.#MAX_PRICE) {
// return 'Внимание! Цена превышает допустимую.'}
// return 'Всё хорошо, цена в порядке.'
// }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// // Задание 17.Наследование классов
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
// accessLevel;
//   // Пиши код ниже этой строки
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

// constructor ({ email, accessLevel }) {
// super(email);
// this.accessLevel = accessLevel;
// }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// // Задание 18.Наследование классов

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 


// //Задание 19 Методы дочернего класса
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
// blacklistedEmails = [];

// blacklist(email) {
// return this.blacklistedEmails.push(email)}


// isBlacklisted(email) {
// if (this.blacklistedEmails.includes(email)) {
// return true;
// }
// return false;
// }


//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 


// ДОПОЛНИТЕЛЬНО:


// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });

// console.log(filteredNumbers); // [4, 5]

const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));