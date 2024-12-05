// let arr = [3, 2, 4, 5, 1, 7];
// let target = 5;

// function returnTargetIndex(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// const result = returnTargetIndex(arr, target);
// console.log(result);


















// 1. Using Array.prototype.indexOf

// const arr = [5, 3, 8, 4, 2];
// const target = 8;
// function returnTargetIndex(arr, target) {
//     return arr.indexOf(target);
// }
// const result = returnTargetIndex(arr, target);
// console.log(result);

// 2. Using Array.prototype.findIndex

// const arr = [5, 3, 8, 4, 2];
// const target = 8;
// function returnTargetIndex(arr, target) {
//     return arr.findIndex(ele => ele === target);
// }


// 3. Using Array.prototype.find

// const arr = [5, 3, 8, 4, 2];
// const target = 8;

// const element = arr.find(element => element === target);
// const index = element !== undefined ? arr.indexOf(element) : -1;
// console.log(index); 


// 4. Using Array.prototype.some for Existence Check

// const arr = [5, 3, 8, 4, 2];
// const target = 8;

// let index = -1;
// arr.some((element, i) => {
//     if (element === target) {
//         index = i;
//         return true; // Stop iteration
//     }
//     return false;
// });
// console.log(index); // Output: 2

// 5. Using forEach

// const arr = [5, 3, 8, 4, 2];
// const target = 8;

// let index = -1;
// arr.forEach((element, i) => {
//     if (element === target && index === -1) {
//         index = i;
//     }
// });
// console.log(index); // Output: 2

// 6. Using reduce

// const arr = [5, 3, 8, 4, 2];
// const target = 8;

// const index = arr.reduce((acc, element, i) => (acc === -1 && element === target ? i : acc), -1);
// console.log(index); // Output: 2

// 7. Using Set for Faster Lookups

// const arr = [5, 3, 8, 4, 2];
// const target = 8;

// const set = new Set(arr);
// const exists = set.has(target);
// console.log(exists); // Output: true
