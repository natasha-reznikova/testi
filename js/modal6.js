// // Задание 1. Метод forEach(callback)
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки


// orderedItems.forEach(function (element) {totalPrice += element;})


//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

// Задание 2. Задача. Фильтрация массива чисел
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach(number => { if (number > value) {filteredNumbers.push(number) }})

  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20))


// // Задание 3. Задача. Общие элементы
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     })
    
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]))




// // Задание 4. Стрелочные функции.
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));



// // Задание 5. Неявный возврат

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem;
// // Пиши код выше этой строки




// // Задание 6.Стрелочные функции как коллбеки
// // Пиши код ниже этой строки
// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки


// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//  // Задание 7. Задача. Фильтрация массива чисел 2.0
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 38))
// console.log(filterArray([12, 24, 8, 41, 76], 20))

// // Задание 8. Задача. Общие элементы 2.0
// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach( (element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }

// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]))

// // Задание 9. Задача. Общие элементы 2.0
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки

// const newArray = [];

// numbers.forEach(element => {
// if (element % 2 === 0) {
//         element = element + value;
//       }
// newArray.push(element);
// })
// return newArray
 
//     // Пиши код выше этой строки
//   }
  
// console.log(changeEven([1, 2, 3, 4, 5], 10))
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
// console.log(changeEven([17, 24, 68, 31, 42], 100))
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100))


// // Задание 10. Метод map()
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths)