// Difficulty: Easy
// Return the unique numbers in the array with new Set() method.

// function removeDuplicates(nums) {
//     return [...new Set(nums)];
// }

// // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers); 

//--------------------------------------------------------------------

// remove duplicates from an array using imperative approach

// function removeDuplicatesImp(nums) {
//     let uniqueNums = [];
//     for(let i = 0; i < nums.length; i++){
//         if(!uniqueNums.includes(nums[i])){
//             uniqueNums.push(nums[i]);
//         }
//     }
//     return uniqueNums;
// }

// // // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicatesImp(numbers);
// console.log('uniqueNumbers :', uniqueNumbers);

//--------------------------------------------------------------------

// remove duplicates from an array using filter method

// function removeDuplicatesFilter(nums) {
//     return nums.filter((num, index) => nums.indexOf(num) === index);
// }

// // // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicatesFilter(numbers);
// console.log('uniqueNumbers :', uniqueNumbers);

//--------------------------------------------------------------------

// remove duplicates from an array using reduce method  

// function removeDuplicatesReduce(nums) {
//    return nums.reduce((uniqueNumbers, num) => {
//         if(!uniqueNumbers.includes(num)){
//             uniqueNumbers.push(num);
//         }
//         return uniqueNumbers;
//     }, []);
// }

// // // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicatesReduce(numbers);
// console.log('uniqueNumbers :', uniqueNumbers);

//--------------------------------------------------------------------
//remove duplicates from an array using forEach method

// function removeDuplicatesForEach(nums) {
//     const uniqueNums = [];
//     nums.forEach(num => {
//         if(!uniqueNums.includes(num)){
//             uniqueNums.push(num);
//         }
//     });
//     return uniqueNums;
// }

// // // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicatesForEach(numbers);
// console.log('uniqueNumbers :', uniqueNumbers);

//--------------------------------------------------------------------
//--------------------------------------------------------------------
//remove duplicates from an array of strings using imperative method

// function removeDuplicatesStrImp(strArr) {
//     const uniqueStrArr = [];
//     for(let i = 0; i < strArr.length; i++){
//         if(!uniqueStrArr.includes(strArr[i])){
//             uniqueStrArr.push(strArr[i]);
//         }
//     }
//     return uniqueStrArr;
// }

// // // Example usage:
// const strings = ['hello', 'world', 'world', 'foo', 'bar', 'foo', 'baz'];
// const uniqueStrings = removeDuplicatesStrImp(strings);
// console.log('uniqueStrings :', uniqueStrings);

//--------------------------------------------------------------------
//remove duplicates from an array of strings using filter method

// function removeDuplicatesStrFilter(strArr) {
//     return strArr.filter((str, index) => strArr.indexOf(str) === index);
// }

// // // Example usage:
// const strings = ['hello', 'world', 'world', 'foo', 'bar', 'foo', 'baz'];
// const uniqueStrings = removeDuplicatesStrFilter(strings);
// console.log('uniqueStrings :', uniqueStrings);

//--------------------------------------------------------------------
//remove duplicates from an array of strings using reduce method

// function removeDuplicatesStrReduce(strArr) {
//     return strArr.reduce((uniqueStrings, str) => {
//         if(!uniqueStrings.includes(str)){
//             uniqueStrings.push(str);
//         }
//         return uniqueStrings;
//     }, []);
// }

// // // Example usage:
// const strings = ['hello', 'world', 'world', 'foo', 'bar', 'foo', 'baz'];
// const uniqueStrings = removeDuplicatesStrReduce(strings);
// console.log('uniqueStrings :', uniqueStrings);

//--------------------------------------------------------------------
//remove duplicates from an array of strings using forEach method

// function removeDuplicatesStrForEach(strArr) {
//     const uniqueStrArr = [];
//     strArr.forEach(str => {
//         if(!uniqueStrArr.includes(str)){
//             uniqueStrArr.push(str);
//         }
//     });
//     return uniqueStrArr;
// }

// // // Example usage:
// const strings = ['hello', 'world', 'world', 'foo', 'bar', 'foo', 'baz'];
// const uniqueStrings = removeDuplicatesStrForEach(strings);
// console.log('uniqueStrings :', uniqueStrings);

//--------------------------------------------------------------------
//remove duplicates from an array of objects using imperative method

// function removeDuplicatesObjImp(objArr) {
//     const uniqueObjArr = [];
//     const uniqueSet = new Set();
//     for(let i = 0; i < objArr.length; i++){
//         const objString = JSON.stringify(objArr[i]);
//         if(!uniqueSet.has(objString)){
//             uniqueSet.add(objString);
//             uniqueObjArr.push(objArr[i]);
//         }
//     }
//     return uniqueObjArr;
// }

// // // Example usage:
// const objects = [
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 25},
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 25},
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 25},
// ];
// const uniqueObjects = removeDuplicatesObjImp(objects);
// console.log('uniqueObjects :', uniqueObjects);


//--------------------------------------------------------------------
//remove duplicates from an array of objects using filter method

// function removeDuplicatesObjFilter(objArr) {
//     const uniqueObjArr = [];
//     const uniqueSet = new Set();
//     objArr.filter(obj => {
//         const objString = JSON.stringify(obj);
//         if(!uniqueSet.has(objString)){
//             uniqueSet.add(objString);
//             uniqueObjArr.push(obj);
//         }
//     });
//     return uniqueObjArr;
// }

// // // Example usage:
// const objects = [
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 25},
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 25},
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 25},
// ];  

// const uniqueObjects = removeDuplicatesObjFilter(objects);
// console.log('uniqueObjects :', uniqueObjects);

