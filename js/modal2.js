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

// Задание 11. Задача: гравировка украшений  Метод строк split()
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
    message = message.split(' ');
    console.log(message);
   const messageLength = message.length;
const totalSum = messageLength * pricePerWord;

    console.log('Сумма заказа: ', totalSum);
   // Change code above this line
    
    return totalSum;

}

calculateEngravingPrice("JavaScript is in my blood", 10);
calculateEngravingPrice("JavaScript is in my blood", 20);
calculateEngravingPrice("Web-development is creative work", 40);
calculateEngravingPrice("Web-development is creative work", 20);