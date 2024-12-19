//1. factorial calculation: The factorial of a number n (denoted as n!) is the product of all positive ntergers less than or equal to n.

//Formula: n! = n x (n -1)! where 0! = 1(base case)

// function factorial(n){
//     if(n === 0){
//         return 1;
//     }

//     return n * factorial(n -1);
// }
// console.log(factorial(6));

//----------------------------------------------------------
//2. Fibonacci Sequence

// The Fibonacci sequence is a series where each number is the sum of the two preceding ones:

// F(n) = F(n -1) + F(n -2) With the base cases: F(0) = 0, F(1) = 1


// function fibonacci(n){
// if(n === 0) return 0;
// if(n === 1) return 1;

// return fibonacci(n -1) + fibonacci(n - 2);
// }

// for(let i = 0; i <= 8; i++){
//     console.log(fibonacci(i));
// }

//----------------------------------------------------------

//3. Sum of an array

// function sumOfArray(arr){
//     if(arr.length === 0){
//         return 0;
//     }

//     return arr[0] + sumOfArray(arr.slice(1));
// }

// console.log(sumOfArray([1, 2, 3, 4, 5]));

//----------------------------------------------------------

//4. Power of a number

// function powerOfNumber(base, exponent){
//     if(exponent === 0){
//         return 1;
//     }

//     return base * powerOfNumber(base, exponent -1);

// }

// console.log(powerOfNumber(2, 3));

//----------------------------------------------------------

//5. Greatest Common Divisor

// function gcd(a, b){
//     if(b === 0){
//         return a;
//     }

//     return gcd(b, a % b);
// }

// console.log(gcd(20, 8));

//----------------------------------------------------------

//6. Decimal to Binary

// function decimalToBinary(n){
//     if(n === 0){
//         return '';
//     }

//     return decimalToBinary(Math.floor(n / 2)) + (n % 2);
// }

// console.log(decimalToBinary(10));

//----------------------------------------------------------

//7. Sum of digits

// function sumOfDigits(n){
//     if(n === 0){
//         return 0;
//     }

//     return n % 10 + sumOfDigits(Math.floor(n / 10));
// }

// console.log(sumOfDigits(12345));

//----------------------------------------------------------

//8. Palindrome

// function isPalindrome(str){
//     if(str.length === 0 || str.length === 1){
//         return true;
//     }

//     if(str[0] === str[str.length -1]){
//         return isPalindrome(str.slice(1, str.length -1));
//     }

//     return false;
// }

// console.log(isPalindrome('madam'));

//----------------------------------------------------------

//9. Reverse a string

// function reverseString(str){
//     if(str === ''){
//         return '';
//     }

//     return reverseString(str.slice(1)) + str[0];
// }

// console.log(reverseString('hello'));

//----------------------------------------------------------

//10. count occurrences of a character in a string

// function countChar(str, char){
//     if(str === ''){
//         return 0;
//     }

//     if(str[0] === char){
//         return 1 + countChar(str.slice(1), char);
//     }

//     return countChar(str.slice(1), char);
// }

// console.log(countChar('hello', 'l'));

//----------------------------------------------------------

//11. Flatten an array

// function flattenArray(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result = result.concat(flattenArray(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const nestedArray = [1, [2, [3, 4], 5], 6, [4, 5]];
// const flatArray = flattenArray(nestedArray);
// console.log(flatArray);

//----------------------------------------------------------

//12. Find the maximum number in an array

// function findMax(arr){
//     if(arr.length === 1){
//         return arr[0];
//     }

//     return Math.max(arr[0], findMax(arr.slice(1)));
// }   

// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//----------------------------------------------------------

//13. Find the minimum number in an array

// function findMin(arr){
//     if(arr.length === 1){
//         return arr[0];
//     }

//     return Math.min(arr[0], findMin(arr.slice(1)));
// }

// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//----------------------------------------------------------

//14. Binary Search

// function binarySearch(arr, target){
//     let start = 0;
//     let end = arr.length -1;

//     while(start <= end){
//         let mid = Math.floor((start + end) / 2);

//         if(arr[mid] === target){
//             return mid;
//         } else if(arr[mid] < target){
//             start = mid + 1;
//         } else {
//             end = mid -1;
//         }
//     }

//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // Output: 4

//15. Permutations of a string

// function permutations(str){
//     if(str.length === 0){
//         return '';
//     }

//     if(str.length === 1){
//         return str;
//     }

//     let result = [];

//     for(let i = 0; i < str.length; i++){
//         const currentChar = str[i];
//         const remainingChars = str.slice(0, i) + str.slice(i + 1);
//         for(let subPermutation of permutations(remainingChars)){
//             result.push(currentChar + subPermutation);
//         }
//     }

//     return result;
// }

// console.log(permutations('abc'));

