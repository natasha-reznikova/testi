// //Задание 1 (Ранний возврат. Использование return) return early pattern
//  function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// Задание 2   (Ранний возврат. Использование return) return early pattern

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line


//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";
  
//   // Change code above this line
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));



// // Задание 3
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } 
//  if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//      return "The order is accepted, our manager will contact you";
//     // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));


// //Задание 4. Создание массива
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

// //Задание 5. Обращение к элементам массива через индекс
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement	= fruits[1];
// const lastElement = fruits[fruits.length - 1];
// // Change code below this line

// console.log('firstElement: ',firstElement);
// console.log('secondElement: ',secondElement);
// console.log('lastElement: ' ,lastElement);


//  // Задание 6. Переопределение значения элемента
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// // Write your code under this line

// console.log(fruits);


// //Задание 7. Длина массива
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength  = fruits.length;
// // Change code below this line
// console.log(fruitsArrayLength);

// // Задание 8. Индекс последнего элемента
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line

// console.log(lastElementIndex);
// console.log(lastElement);


// // Задание 9. Крайние элементы массива

// function getExtremeElements(array) {
//   // Change code below this line
// const firstElement = array[0];
// const lastElementIndex = array.length - 1;
//     const lastElement = array[lastElementIndex];
    
// return [firstElement, lastElement];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]))

// // Задание 10. Метод строк split()
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// // Задание 11. Задача: гравировка украшений  Метод строк split()
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     message = message.split(' ');
//     console.log(message);
//    const messageLength = message.length;
// const totalSum = messageLength * pricePerWord;

//     console.log('Сумма заказа: ', totalSum);
//    // Change code above this line
    
//     return totalSum;

// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// // Задание 12. Метод массива join()
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

// string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// // Задание 13. генератор slug
// //Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// function slugify(title) {
//   // Change code below this line
//   const normalizeTitle = title.toLowerCase();

//     // console.log(normalizeTitle);
//     // const words = normalizeTitle.split(' ');
//     // const slug = words.join('-');  // Change code above this line
    

//     const slug1 = title.toLowerCase().split(' ').join('-');
// return slug1;
// }
// console.log((slugify("Arrays for begginers")));
// console.log((slugify("English for developer")));
// console.log((slugify("Ten secrets of JavaScript")));
// console.log((slugify("How to become a JUNIOR developer in TWO WEEKS")));



// Задание 14. Метод slice()
//Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива,
  //  не изменяя его.Копия делается от begin и до, но не включая, end - индексы элементов исходного массива. END - не включен в отображение( до него)
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);

// console.log(nonExtremeEls);

// console.log(lastThreeEls);


// // Задание 15. Метод concat()
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients); // Change this line


//  // Задание 16. Метод concat()
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray);
//     console.log(newArray.length);
//     console.log(maxLength);
    
//     if (newArray.length > maxLength) {
//         newArray = newArray.slice(0, maxLength);
//     }
//     return newArray;
//     }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


//  // Задание 17. Цикл for
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }


//  Задание 18. сумма чисел (цикл for)

// function calculateTotal(number) {
//     // Change code below this line
//     let totalSum = 0;

//     for (let i = 1; i <= number; i += 1) {
//         totalSum += i;
//     }
//        return totalSum;
// }
  
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
   


//  // Задание 19. Итерация по массиву
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length ; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }



//  // Задание 20. подсчёт суммы покупки
// function calculateTotalPrice(order) {
//     let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
// }
//   // Change code above this line
//  console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);



// // Задание 21. подсчёт суммы покупки

// function findLongestWord(string) {
//     // Change code below this line
//     let newString = string.split(" ");
//     let longerWord = newString[0];
//     for (let i = 0; i < newString.length; i += 1) {
//         if (longerWord.length < newString[i].length) {
//             longerWord = newString[i];
//         }
       
//     }
//     return longerWord;
// }
//   // Change code above this line

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// // Задание 22. Метод push() - указываем   имя-массива.push("новый элемент"). не нужно указывать индекс. Автоматически в конец добавляется

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

// for (let i = min; i <=max; i += 1) {
//     numbers.push(i);
// }


//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// // Задание 23. Задача: фильтрация массива чисел

// function filterArray(numbers, value) {
//    // Change code below this line
//  const newArray = [];

//     for (const number of numbers) {
//         if (number > value) {
//         newArray.push(number);
//         }
//     }
//     console.log(newArray);
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// // Задание 24. Метод includes()

//  function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits.includes(fruit))

// // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));


//  // Задание 25. Задача: общие элементы

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const unitElements = [];

// for (const element of array1) {
//   // console.log(array1);
//   // console.log(array2)

//   if (array2.includes(element)) {
//     unitElements.push(element);
//   }

// }
//   return unitElements;

//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


//  // Задание 26. Цикл for...of
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// // Задание 27. Зачада: фильтрация массива чисел 2.0
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// // Задание 28. Оператор %
// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a, b, c, d, e)

// // Задание 29. Задача: чётные числа

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const evenNumbers = [];
  
  
// for (let i = start; i <= end; i += 1) {
// if (i % 2 === 0) {
// evenNumbers.push(i);
// }
// }
// return evenNumbers;
//     // Change code above this line
//   }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// // Задание 30. Оператор break
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
// break;
//   }
// }


// // Задание 31. Оператор break vs return в функции
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//   return i;
//     }
//   }
//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));


// Задание 3. Задача: функция includes()

function includes(array, value) {
  // Change code below this line

  for (const arr of array) {
    if (arr === value) {
      return true;
    }
    
  }
  return false;
  }

  

//   // Change code above this line

// includes([1, 2, 3, 4, 5], 3);
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));



// Приветсти массив к одному уровню

// const arr = ['2232', ['Hello', 'world'], '777', ['new array', ['some array', ['next level']]]]
От GoIT Academy 8 всем:  04:56 PM
// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

const obj1 = {
  "my name": "John",
  "i like my work": true,
  "programming languages": ["js", "java", "c++"],
};


// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

const obj1 = {
  "my name": "John",
  "i like my work": true,
  "programming languages": ["js", "java", "c++"],
};
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.


Array.isArray(arr) - проверка на массив
