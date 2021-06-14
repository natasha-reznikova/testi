// Задание 1. Создание объекта

// const apartment = {
// imgUrl: "https://via.placeholder.com/640x480",
// descr : "Spacious apartment in the city center",
// rating: 4,
// price : 2153,
// tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// // Задание 2. Вложенный объект
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//    name: "Henry",
//    phone: "982-126-1588",
//    email: "henry.carter@aptmail.com",
//     },
//   };

// // Задание 3. Доступ к свойствам через точку

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };

//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line


//   // Задание 4. Доступ к вложенным свойствам
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line



//   // Задание 5. Доступ к свойствам через квадратные скобки
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

//   // Задание 6. Изменение значения свойства
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }

// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// // Change code below this line

// console.log(apartment);



//   // Задание 7. Добавление свойств
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country : "Jamaica", city: "Kingston"};

// // Change code below this line

// console.log(apartment)


//   // Задание 8. Короткие свойства

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
// name,
// price,
// image,
// tags
//   // Change code below this line



//   // Change code above this line
// };

//   // Задание 9. Вычисляемые свойства

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };

// console.log(credentials);

  // Задание 10. Цикл for...in

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);


//   // Задание 11. Метод hasOwnProperty() hasOwnProperty(key) - определяет это собственное свойство или нет. Выдает true or fasle
//   // Object.create(animal) - Создат новый объект и связывает его с  animal
// // Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }


// // Задание 12. Задача. Подсчёт свойств

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     propCount = Object.keys(object).length;
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



// // Задание 13. Метод Object.keys()

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = []
// /// Change code below this line
// const keys = Object.keys(apartment);


// for (const key of keys) {
// values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);



// // Задание 14. Метод Object.keys()
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//      propCount = Object.keys(object).length;


//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));


// // Задание 15. Метод Object.values()
// const apartment = {
//  descr: 'Spacious apartment in the city centre',
//  rating: 4,
//  price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(Object.keys(apartment));
// console.log(Object.values(apartment));


// Задание 16. Задача. Расходы на зарплату
//1й вариант
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const keys = Object.keys(salaries);
//   console.log(keys)

//   for (const key of keys) {
//     console.log(salaries[key])
//     totalSalary += salaries[key];
//   }
//   // Change code above this line
//   return totalSalary;
// }


// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))


// 2й вариант
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const values = Object.values(salaries);

//   for (const value of values) {
//     console.log(value)
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }


// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))

//ПРИМЕР: 

// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   console.log(book)

//   console.log(book.title)
//   console.log(book.author)
//   console.log(book.rating)
// }



// Задание 17. Массив объектов

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   console.log(color)

//  console.log(hexColors)}


// // Задание 18. Задача. Поиск объекта по значению свойства

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     let name = product.name;
//     if (productName === name ) {
//       return product.price;
//     }
//   }
//         return null;

// }

//   // Change code above this line


// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// // Задание 19. Задача. Поиск объекта по значению свойства
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change codebelow this line
//   const array = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       array.push(product[propName]);
//     }
//   }
//       return array;

// }

//     // Change code above this line



// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("name"))


// // Задание 20. Задача. Поиск объекта по значению свойства

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

// let  totalCoast = 0;

// for (const product of products) {
//   console.log(product);
// if (product.name === productName) {
//   totalCoast = product.price * product.quantity;
// }


// }return totalCoast;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"))

// // Задание 21. Деструктуризация объектов
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;



// // Задание 21.  Значения по умолчанию
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// Задание 22.  Изменение имени переменной

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
// yesterday: highYesterday,
// today: highToday,
// tomorrow: highTomorrow,
// icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;



// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;



// // Задание 23.  Деструктуризация в циклах

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);



// // Задание 25.  Глубокая деструктуризация


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
// today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},

// tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast;


// // Задание 26.  Паттерн «Объект настроек»
// // Change code below this line
// // Change code below this line
// function calculateMeanTemperature(forecast) {

//  const {today: {low: todayLow, high: todayHigh},
//         tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;

//   // Change code above this line

//  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;

//          }

// console.log (calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29}}));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38}}))


// // Задание 27.  ПаттОперация spread при передаче аргументов
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore)


// // Задание 28. Операция spread при создании нового массива

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// // Задание 29. Операция spread при создании нового объекта
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};


// // Задание 30. Задача. Карточки задач
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//    const newData = { completed, category, priority, ...data };
//   console.log(newData);
// //return newData;
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }))

// // Задание 31. Операция rest для сбора всех аргументов функции
// // Change code below this line

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;

// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));


// // Задание 32. Операция rest для сбора части аргументов функции
// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const arg of args) {
// if (arg > value) {
// total += arg;
// }
//   }
//   return total;
//   // Change code above this line
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);


// // // Задание 33. Задача. Массив совпадений

// // Change code below this line
// function findMatches(...args) {
//   const matches = [];
//  for (let i = 1; i < args.length; i += 1) {
//    if (args[0].includes(args[i])) {
//      matches.push(args[i]);
//  }
//  }
// return matches;

// console.log(matches)
// } 
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16))


//  // Задание 34. Методы объекта

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

// removeBook(bookName) {
//    return `Deleting book ${bookName}`;  
// },

// updateBook(oldName, newName) {
// return `Updating book ${oldName} to ${newName}`;
// }
//   // Change code above this line
// };


// // Задание 35. Доступ к свойствам объекта в его методах

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 	const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);


//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Dune");


// // Задание 36. Задача. Лавка зелий «У старой жабы»
// const atTheOldToad = {
//   // Change code below this line
// potions: [],
//   // Change code above this line
// };

//  // Задание 37. Задача. Лавка зелий «У старой жабы»
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// getPotions() {
// return this.potions}
//   // Change code above this line
// };
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.getPotions() )


// //  // Задание 38. Задача. Добавляем новое зелье
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
// this.potions.push(potionName);
// return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad);
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'))


// //  // Задание 39. Задача. Удаляем зелье
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   remiovePotion(potionName) {
//     // Change code below this line
//     const index = this.potions.indexOf(potionName);
//     this.potions.splice(index, 1);
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad(removePotion("Dragon breath")));
// // console.log(atTheOldToad.potions)
// // console.log(removePotion("Dragon breath"));
// // console.log(removePotion("Speed potion"))

// что мне нужно указать, чтоб получить в консоли результат

// //  Задание 40. Задача. Обновляем зелье
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  const index = this.potions.indexOf(oldName);
//  this.potions.slice(index, 1, newName);
//     // Change code above this line
//   },
// };
// // atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// // atTheOldToad.updatePotionName("Stone skin", "Invisibility");   как отобразить вот это в консоли???


// //  Задание 41. Задача. Расширяем инвентарь
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
// for (let i = 0; i < this.potions.length; i += 1)
//     if (this.potions[i] === potionName) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//   const { potions } = this;
//   for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//         return potions;
//       }
//   } return `Potion ${potionName} is not in inventory!`;
//   },


//   updatePotionName(oldName, newName) {
//        const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//         return potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
