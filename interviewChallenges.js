 // write a method that takes a string and returns the number of vowels in the string

//  function countVowels(str) {
//     if (!str) {
//       return 0;
//     }
//   let count = 0;
//   let vowels = 'aeiou';
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }
//   return count; 
// }

// console.log(countVowels('hello'));

// write a function that takes array of strings as input and returns the longest string

// function longestString(arr) {
//   if (!arr.length) {
//     return '';
//   }
//   let longest = arr[0];
//   for (let str of arr) {
//     if (str.length > longest.length) {
//       longest = str;
//     }
//   }
//   return longest;
// }

// console.log(longestString(['hello', 'world', 'hi', 'goodbye'])); // 'goodbye'

// write a function that takes a string as input and returns the string reversed

// function reverseString(str) {
//     if (!str) {
//       return '';
//     }

//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString('hello'));

//--------------------------------------------
// Write a function that takes an array of numbers as input and returns a new array that contains only the numbers that are odd.

// function oddNumbers(arr) {
//     if (!arr.length) {
//         return [];
//     }
//     let result = [];
//     for (let num of arr) {
//         if (num % 2 !== 0) {
//         result.push(num);
//         }
//     }
//     return result;
//     }

//     console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); 

// --------------------------------------------

// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

// function sumArray(arr) {
//     if (!arr.length) {
//         return 0;
//     }
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

// --------------------------------------------

// Write a function that takes an array of numbers as input and returns the number of positive numbers in the array.

// function positiveNumbers(arr) {
//     if (!arr.length) {
//         return 0;
//     }
//     let count = 0;
//     for (let num of arr) {
//         if (num > 0) {
//         count++;
//         }
//     }
//     return count;
// }

// console.log(positiveNumbers([1, -2, 3, -4, 5]));

// --------------------------------------------

// Write a function that takes an array of numbers as input and returns the number of zeros in the array.

// function zeroNumbers(arr) {
//     if (!arr.length) {
//         return 0;
//     }
//     let count = 0;
//     for (let num of arr) {
//         if (num === 0) {
//         count++;
//         }
//     }
//     return count;
// }

// console.log(zeroNumbers([1, 0, 3, 0, 5]));

// --------------------------------------------
// Write a function that takes a string as input and return true if the string is a palindrome and false otherwise.

// function isPalindrome(str) {
//     if (!str) {
//         return false;
//     }
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed === str;
// }

// console.log(isPalindrome('hello'));
// console.log(isPalindrome('racecar'));

// --------------------------------------------

// write a function that takes array of numbers as input and returns ascending order of the array using imperative programming


// function ascendingOrder(arr) {
//     if (!arr.length) {
//         return [];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//         }
//     }
//     return arr;
// }

// console.log(ascendingOrder([3, 2, 1, 5, 4]));

// --------------------------------------------
//Variation 2

// function sortNum(arr){
//     for(let i = 0; i< arr.length; i++){
//         for(let j = 0; j < arr.length -1; j++){
//             if(arr[j] > arr[j+1]){
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const randomNumbers = [3, 2, 1, 5, 4];
// const resultSort = sortNum(randomNumbers);
// console.log(resultSort);

//--------------------------------------------

// write a function that takes array of numbers as input and returns descending order of the array using imperative programming


// function descendingOrder(arr) {
//     if (!arr.length) {
//         return [];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//         }
//     }
//     return arr;
// }

// console.log(descendingOrder([3, 2, 1, 5, 4]));

// --------------------------------------------
//Variation 2

// function reverseSorting(arr){
//     if(!arr.length){
//         return [];
       
//     }

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] < arr[j+1]){
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const randomNumbers = [3, 2, 1, 5, 4];

// const resultSort = reverseSorting(randomNumbers);
// console.log(resultSort);


// --------------------------------------------

//write a function that takes string as input and returns the string in ascending order lexographically


// function sortStringByLength(arr) {
//     if (!arr.length) {
//         return [];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//         }
//     }
//     return arr;
// }

// console.log(sortStringByLength(['hello', 'world', 'hi', 'goodbye']));

// --------------------------------------------

// second highest number in an array

// function secondHighest(arr) {
//     if (!arr.length) {
//         return null;
//     }
//     let highest = arr[0];
//     let secondHighest = null;
//     for (let num of arr) {
//         if (num > highest) {
//         secondHighest = highest;
//         highest = num;
//         } else if (num > secondHighest && num < highest) {
//         secondHighest = num;
//         }
//     }
//     return secondHighest;
// }

// console.log(secondHighest([1, 3, 2, 5, 4, 6, 7, 8, 9, 10]));

// --------------------------------------------
// variation 2

// function secondHighest(arr) {
//     if (arr.length < 2) {
//         return null;
//     }

//     let highest = -Infinity;
//     let secondHighest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > highest) {
//             secondHighest = highest;
//             highest = arr[i];
//         } else if (arr[i] > secondHighest && arr[i] !== highest) {
//             secondHighest = arr[i];
//         }
//     }

//     return secondHighest === -Infinity ? null : secondHighest;
// }

// console.log(secondHighest([5, 2, -1, 0, -8]));
// console.log(secondHighest([5]));
// console.log(secondHighest([5, 5, 5, 5]));


//write a function to give fibonacci series upto n numbers

// function fibonacci(n){
//     let fib = [0, 1];
//     for(let i = 2; i < n; i++){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }

// console.log(fibonacci(10));
// const fibo = fibonacci(10);
// console.log(...fibo);


// write a function to find the given two strings is anagram or not

// function isAnagram(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }

//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

// console.log(isAnagram('ollo',  "lolo"));


// write a function to filter only the string starting with 'a' or 'A'

// function filterStrings(arr){
//     if(!arr.length){
//         return [];
//     }

//     const result = [];
//     for(let str of arr){
//         if(str[0].toLowerCase() === 'a'){
//             result.push(str);
//         }
//     }
//     return result;
// }

// const result = filterStrings(['apple', 'banana', 'orange', 'avocado', 'grapes']);
// console.log('result :', result);

// write a function to filter only the string starting with 'a'

// function filterStrings(arr){
//     if(!arr.length){
//         return [];
//     }

//     const result = [];
//     for(let str of arr){
//         if(str.startsWith('a')){
//             result.push(str);
//         }
//     }
//     return result;
// }

// const result = filterStrings(['apple', 'banana', 'orange', 'avocado', 'grapes']);
// console.log('result :', result);


// write a function to filter only the string starting with vowels

// function filterStringsStartingWithVowels(arr){
//     if(!arr.length){
//         return [];
//     }

//     const result = [];
//     for(let str of arr){
//         if('aeiou'.includes(str[0].toLowerCase())){
//             result.push(str);
//         }
//     }
//     return result;
// }

// const filteredResultStartingWithVowels = filterStringsStartingWithVowels(['apple', 'banana', 'orange', 'avocado', 'grapes']);
// console.log('result :', filteredResultStartingWithVowels);

// write a function to filter only the string ending with vowels

// function filterStrings(arr){
//     if(!arr.length){
//         return [];
//     }

//     const result = [];
//     for(let str of arr){
//         if('aeiou'.includes(str[str.length-1])){
//             result.push(str);
//         }
//     }
//     return result;
// }

// const filteredResult = filterStrings(['apple', 'banana', 'orange', 'avocado', 'grapes']);
// console.log('filteredResult :', filteredResult);


