// array.forEach(callback(currentValue, index, array), thisArg);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num); 
// });

// --------------------------------------------------
// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });

// --------------------------------------------------
// const numbers = [1, 2, 3];
// const doubled = [];

// numbers.forEach((num) => {
//   doubled.push(num * 2);
// });

// console.log(doubled);

// --------------------------------------------------
// const person = {
//     name: "Nehru",
//     greetAll: function (names) {
//       names.forEach(function (name) {
//         console.log(`${this.name} greets ${name}`);
//       }, this); 
//     },
//   };

//   person.greetAll(["Alice", "Bob", "Charlie"]);

// --------------------------------------------------
//--------------------------------------------------
//array.map(callback(currentValue, index, array), thisArg);

// 1. Basic Transformation

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((num) => num * num);

// console.log(squares); 

// --------------------------------------------------
// 2. Adding Index Information

// const fruits = ['apple', 'banana', 'cherry'];
// const labeledFruits = fruits.map((fruit, index) => `${index + 1}: ${fruit}`);

// console.log(labeledFruits);

// --------------------------------------------------
// 3. Transforming Objects

// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//   ];
  
//   const userIds = users.map((user) => user.id);
  
//   console.log(userIds);

// --------------------------------------------------
// 4. Changing Array Structure

// const numbers = [1, 2, 3, 4, 5];
// const doubledObjects = numbers.map((num) => ({ original: num, doubled: num * 2 }));

// console.log(doubledObjects);

// --------------------------------------------------
// 5. Using return inside map()

// const numbers2 = [1, 2, 3];
// const transformed = numbers.map(num => {
//   const double = num * 2;
//   const triple = num * 3;
//   return { double, triple };
// });
// console.log(transformed);

//--------------------------------------------------
//--------------------------------------------------
// const newArray = array1.concat(array2, array3, ..., arrayN);
// 1. Merging Two Arrays

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combined = array1.concat(array2);

// console.log(combined); 
// console.log(array1);


//--------------------------------------------------

// 2. Concatenating Multiple Arrays
// const array1 = [1];
// const array2 = [2, 3];
// const array3 = [4, 5, 6];

// const combined = array1.concat(array2, array3);

// console.log(combined);

//--------------------------------------------------

// 3. Adding Values Directly
// const numbers = [1, 2, 3];
// const combined = numbers.concat(4, 5, 6);

// console.log(combined);


//--------------------------------------------------

// 4. Using Non-Array Objects
// const array = [1, 2, 3];
// const obj = { a: 4, b: 5 };

// const combined = array.concat(obj);

// console.log(combined);

//--------------------------------------------------
// Alternative
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combined = [...array1, ...array2];

// console.log(combined);



//--------------------------------------------------
//------------------------------------------------
//array.every(callback(currentValue, index, array), thisArg);

// 1. Checking if All Elements Satisfy a Condition

// const numbers = [2, 4, 6, 8];

// const allEven = numbers.every((num) => num % 2 === 0);

// console.log(allEven); 

//--------------------------------------------------
// 2. Checking for a Specific Range
// const numbers = [10, 15, 20, 25];

// const withinRange = numbers.every((num) => num >= 10 && num <= 30);

// console.log(withinRange); 

//--------------------------------------------------
// 3. Using Index or Array in the Callback
// const numbers = [10, 20, 30];

// const indexCheck = numbers.every((num, index) => num > index);

// console.log(indexCheck);

//--------------------------------------------------
// 4. Working with Strings

// const words = ['apple', 'banana', 'cherry'];
// const allContainA = words.every((word) => word.includes('a'));

// console.log(allContainA);

//--------------------------------------------------
// 5. Handling Empty Arrays

// const emptyArray = [];

// const result = emptyArray.every((num) => num > 0);

// console.log(result);

//--------------------------------------------------
// Check if all students passed an exam:
// const scores = [85, 92, 88, 79];

// const allPassed = scores.every((score) => score >= 50);

// console.log(allPassed);

//--------------------------------------------------
//------------------------------------------------
// array.some(callback(currentValue, index, array), thisArg);

// 1. Checking if Any Number is Greater Than a Value

// const numbers = [10, 20, 30, 40];

// const hasLargeNumber = numbers.some((num) => num > 25);

// console.log(hasLargeNumber);

//--------------------------------------------------
// 2. Checking if Any Element Satisfies a Condition
// const numbers = [1, 3, 5, 8];

// const hasEven = numbers.some(function (num) {
//   return num % 2 === 0;
// });

// console.log(hasEven);

//--------------------------------------------------
// 3. Testing Strings
// const words = ['apple', 'banana', 'cherry'];

// // Implicit return
// const hasShortWord = words.some((word) => word.length < 5);
// console.log(hasShortWord); 
// // Explicit return
// const hasShortWordExplicit = words.some(function (word) {
//   return word.length < 5;
// });
// console.log(hasShortWordExplicit); 

//--------------------------------------------------
// Real-Life Use Case
// Imagine checking if a user has a pending task:
// const tasks = [
//     { id: 1, title: 'Code Review', completed: true },
//     { id: 2, title: 'Write Documentation', completed: false },
//   ];
  
//   // Implicit return
//   const hasPending = tasks.some((task) => !task.completed);
  
//   console.log(hasPending);

//--------------------------------------------------
//--------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers);

//--------------------------------------------------
// array.filter(callback(currentValue, index, array), thisArg);
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0; 
// });

// console.log(evenNumbers); 
//--------------------------------------------------

// const users = [
//     { id: 1, name: 'Alice', isActive: true },
//     { id: 2, name: 'Bob', isActive: false },
//     { id: 3, name: 'Charlie', isActive: true },
//   ];
  
//   const activeUsers = users.filter((user) => user.isActive);
  
//   console.log(activeUsers);

//--------------------------------------------------

// function isEven(num) {
//     return num % 2 === 0;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const evenNumbers = numbers.filter(isEven);
  
//   console.log(evenNumbers);
  

//--------------------------------------------------
//--------------------------------------------------
// array.find(callback(currentValue, index, array), thisArg);

// 1. to find the first even number
// const numbers = [1, 2, 3, 4, 5];

// const firstEven = numbers.find((num) => num % 2 === 0);

// console.log(firstEven);

//--------------------------------------------------
// 2. Finding an Object in an Array

// const users = [
//     { id: 1, name: 'Alice', isActive: false },
//     { id: 2, name: 'Bob', isActive: true },
//     { id: 3, name: 'Charlie', isActive: false },
//   ];
  
//   const activeUser = users.find((user) => user.isActive);
  
//   console.log(activeUser); 

//--------------------------------------------------
// 3. Using Index in the Callback

// const numbers = [10, 20, 30, 40];

// const elementWithIndex = numbers.find((_, index) => index === 2);

// console.log(elementWithIndex);
//--------------------------------------------------
// const fruits = ['apple', 'banana', 'cherry', 'date'];

// const longFruit = fruits.find((fruit) => fruit.length > 5);

// console.log(longFruit);

//--------------------------------------------------
// const numbers = [1, 3, 5];

// const firstEven = numbers.find((num) => num % 2 === 0);

// console.log(firstEven)
//--------------------------------------------------
//--------------------------------------------------
//array.reduce(callback(accumulator, currentValue, index, array), initialValue);
//1. Summing Numbers
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);

//--------------------------------------------------
// 2. Multiplying Numbers

// const numbers = [1, 2, 3, 4, 5];

// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// console.log(product);
//--------------------------------------------------
// 3. Flattening an Array

// const array = [[1, 2], [3, 4], [5, 6]];

// const flattened = arrays.reduce((acc, cur) => acc.concat(cur), []);
// console.log(flattened);

//--------------------------------------------------
// 4. Counting Occurrences

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);

//--------------------------------------------------
// 5. Finding the Maximum Value
// const numbers = [10, 5, 20, 8];

// const max = numbers.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);

// console.log(max);

//--------------------------------------------------
// 6. Using No initialValue

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, cur) => acc + cur);

// console.log(sum);
// 7. Real-lif example
// const cart = [
//     { product: 'Apple', price: 10 },
//     { product: 'Banana', price: 5 },
//     { product: 'Cherry', price: 15 },
//   ];
  
//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  
//   console.log(totalPrice); // 30

//--------------------------------------------------
//--------------------------------------------------
//array.reduceRight(callback(accumulator, currentValue, index, array), initialValue);
//1. Summing Numbers
// const numbers = [1, 2, 3, 4, 5]; 

// const sum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);
  

//--------------------------------------------------
//--------------------------------------------------
// array.entries();

// const fruits = ['apple', 'banana', 'cherry'];

// const iterator = fruits.entries();

// for (const [index, value] of iterator) {
//   console.log(index, value);
// }

//--------------------------------------------------
// const colors = ['red', 'green', 'blue'];
// const iterator = colors.entries();

// console.log(iterator.next().value); 
// console.log(iterator.next().value); 
// console.log(iterator.next().value);

//--------------------------------------------------
// const numbers = [10, 20, 30];
// const entriesArray = [...numbers.entries()];

// console.log(entriesArray);

//--------------------------------------------------
//--------------------------------------------------
// array.join(separator);
//1. Joining with Default Separator

// const fruits = ['apple', 'banana', 'cherry'];

// const result = fruits.join();

// console.log(result);

//--------------------------------------------------
// 2. Joining with Custom Separator

// const fruits = ['apple', 'banana', 'cherry'];

// const result = fruits.join(' - ');

// console.log(result);
//--------------------------------------------------

// 3. Joining Without a Separator
// const letters = ['H', 'e', 'l', 'l', 'o'];

// const result = letters.join('');

// console.log(result); 

//--------------------------------------------------
// 4. Joining Numbers

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.join(' -');

// console.log(result);

//--------------------------------------------------
// 5. Joining with Empty or Sparse Elements
// const mixed = ['apple', , 'banana', undefined, 'cherry'];

// const result = mixed.join(' | ');

// console.log(result);

//--------------------------------------------------
//--------------------------------------------------
//array.sort(compareFunction);

// 1. Default Sort (Lexicographical Order)
// const fruits = ['banana', 'apple', 'cherry', 'date'];

// fruits.sort();

// console.log(fruits);

//--------------------------------------------------
//2. Sorting Numbers (Ascending)
// const numbers = [10, 2, 30, 1];

// numbers.sort((a, b) => a - b); // Ascending order

// console.log(numbers);

//--    ----------------------------------------------
//3. Sorting Numbers (Descending)
// const numbers = [10, 2, 30, 1];

// numbers.sort((a, b) => b - a); // Descending order

// console.log(numbers);

//--------------------------------------------------
//4. Sorting Objects
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 },
//   ];
  
//   users.sort((a, b) => a.age - b.age);
  
//   console.log(users);        

//--------------------------------------------------
//4. Sorting Strings (Case Sensitivity)

// const words = ['Banana', 'apple', 'Cherry', 'date'];
// words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(words);

//--------------------------------------------------
// 5. Sorting Strings (Case Insensitivity)
// const words = ['Banana', 'apple', 'Cherry', 'date'];

// words.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);

// console.log(words);

//--------------------------------------------------

// Sorting Arrays of Dates
// const dates = ['2024-12-01', '2021-01-01', '2023-05-15'];

// dates.sort((a, b) => new Date(a) - new Date(b));

// console.log(dates); 

//--------------------------------------------------
//--------------------------------------------------
// array.toSorted(compareFunction);
// Sorting a List of Items Without Affecting the Original

// const originalArray = [3, 1, 2];

// const newArray = originalArray.toSorted((a, b) => a - b);

// console.log(originalArray); 
// console.log(newArray)

//--------------------------------------------------
//--------------------------------------------------

//array.reverse();

// 1. Reversing an Array of Numbers

// const numbers = [1, 2, 3, 4, 5];

// const reversedNumbers = numbers.reverse();

// console.log(reversedNumbers); 
// console.log(numbers);

//--------------------------------------------------
// 2. Reversing an Array of Strings

// const words = ['apple', 'banana', 'cherry']; 

// const reversedWords = words.reverse();

// console.log(reversedWords);


//--------------------------------------------------

//3. Reversing an Array of Characters
// const word = 'hello';

// const reversedWord = word.split('').reverse().join('');

// console.log(reversedWord);

//--------------------------------------------------
//4. Non-Mutating Alternative
// const numbers = [1, 2, 3, 4, 5];

// const reversedNumbers = [...numbers].reverse();

// console.log(numbers);    
// console.log(reversedNumbers);

//--------------------------------------------------

// 5. Reversing for Sorting
// const numbers = [10, 5, 20, 15];

// numbers.sort((a, b) => a - b).reverse();

// console.log(numbers);

//--------------------------------------------------
//--------------------------------------------------

//array.toReversed();

// 1. Reversing an Array of Numbers

// const numbers = [1, 2, 3, 4, 5];

// const reversedNumbers = numbers.toReversed();

// console.log(reversedNumbers);
// console.log(numbers);

//--------------------------------------------------
// 2. Reversing an Array of Strings

// const words = ['apple', 'banana', 'cherry'];

// const reversedWords = words.toReversed();

// console.log(reversedWords);
// console.log(words);
//--------------------------------------------------
//--------------------------------------------------

//array.slice(start, end)

// 1. Extracting a Subarray

// const numbers = [1, 2, 3, 4, 5];

// const subarray = numbers.slice(1, 4);

// console.log(subarray);

//--------------------------------------------------
// 2. Extracting a Subarray with Negative Indices

// const numbers = [1, 2, 3, 4, 5];

// const subarray = numbers.slice(-3, -1);

// console.log(subarray);   

//--------------------------------------------------
// 3. Extracting a Subarray from the End

// const numbers = [1, 2, 3, 4, 5];

// const subarray = numbers.slice(-2);

// console.log(subarray);

//--------------------------------------------------
//5. String Manipulation    

// const name = 'Javascript';
// const part = name.slice(0, 4);

// console.log(part);
//--------------------------------------------------

//6.  Removing Elements Without Modifying the Original

// const items = [1, 2, 3, 4, 5];
// const withoutFirstTwo = items.slice(2);
// console.log(withoutFirstTwo); 
// console.log(items);


//--------------------------------------------------
//--------------------------------------------------

// array.splice(start, deleteCount, item1, item2, ..., itemN)

// 1. Removing Elements
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const removed = fruits.splice(1, 2);

// console.log(fruits);  
// console.log(removed);

//--------------------------------------------------

//2. Adding Elements
// const numbers = [1, 2, 3, 5];
// numbers.splice(3, 0, 4);

// console.log(numbers);

//--------------------------------------------------

//3. Replacing Elements
// const colors = ['red', 'green', 'blue'];
// colors.splice(1, 1, 'yellow');

// console.log(colors);

//--------------------------------------------------
// 4. Clearing an Array

// const data = [10, 20, 30];
// data.splice(0, data.length);
// console.log(data);

//--------------------------------------------------
// 5. Inserting Elements at the End

// const colors = ['red', 'blue'];
// colors.splice(colors.length, 0, 'green', 'yellow');
// console.log(colors);


//--------------------------------------------------
//6. Removing and Adding at the Same Time

// const scores = [100, 200, 300, 400];

// scores.splice(1, 2, 250, 350);

// console.log(scores);

//--------------------------------------------------
// 7. Removing All Elements from a Specific Index
// const items = [1, 2, 3, 4, 5];

// items.splice(2);

// console.log(items);

//--------------------------------------------------
// 8. Using Negative start
// const letters = ['a', 'b', 'c', 'd', 'e'];

// letters.splice(-2, 1);

// console.log(letters);

//--------------------------------------------------
//--------------------------------------------------

// array.fill(value, [start], [end]);

// 1. Filling an Entire Array
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(0);

// console.log(numbers);

//--------------------------------------------------
// 2. Filling a Portion of the Array
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(9, 1, 4);

// console.log(numbers);

//--------------------------------------------------
// 3. Using Negative Indices
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(0, -2);

// console.log(numbers);

//--------------------------------------------------
// 4. Filling an Array with a Function
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(function () {
//     return Math.random();
//   });

// console.log(numbers);

//--------------------------------------------------
// 5. Filling an Empty Array
// const emptyArray = new Array(5).fill(0);

// console.log(emptyArray);

//--------------------------------------------------
//use cases
// 1. Filling an Array with a Default Value
// const defaultArray = Array(10).fill('default');
// console.log(defaultArray);

//--------------------------------------------------
//2. Resetting an Array
// const numbers = [1, 2, 3, 4, 5];
// numbers.fill(0);
// numbers.fill(7, 1, 3);
// console.log(numbers);

//--------------------------------------------------
//3. Highlighting Sections of an Array
// const seats = ['empty', 'empty', 'empty', 'empty', 'empty'];
// seats.fill('reserved', 1, 4);
// console.log(seats);

//--------------------------------------------------
// Shallow Fill:
// If the value is an object, all array elements will reference the same object:
// const arr = new Array(3).fill({});
// arr[0].name = 'Alice';

// console.log(arr);

//--------------------------------------------------
// Mutates Original:
// const original = [1, 2, 3];
// const filled = [...original].fill(0);

// console.log(original); 
// console.log(filled); 


//--------------------------------------------------
//--------------------------------------------------
// array.indexOf(searchElement, [fromIndex]);

// 1. Finding an Element in an Array
// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.indexOf('banana');
// console.log(index); 

//--------------------------------------------------
// 2. Finding an Element Starting from a Specific Index
// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.indexOf('banana', 2);
// console.log(index); 

//--------------------------------------------------
// 3. Using Negative Start Index
// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.indexOf('banana', -2);
// console.log(index); 

//--------------------------------------------------