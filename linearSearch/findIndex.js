//1. Basic Linear Search
//Find the index of a target element in an unsorted array.

//1.Imperative Approach with a for loop

// function findIndexOfElement(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(findIndexOfElement([2, 5, 34, 54, 12, 28, 94], 54));

//--------------------------------------------------------------------

//2. Using for...of with entries()

// function findIndexOfElement(arr, target){
//     for(let [index, value] of arr.entries()){
//         if(value === target){
//             return index;
//         }
//     }
//     return -1;
// }

// console.log(findIndexOfElement([2, 5, 34, 54, 12, 28, 94], 54));

//--------------------------------------------------------------------

//3. Using while loop

// function findIndexWhile(arr, target){
//     let i = 0;
//     while( i < arr.length){
//         if(arr[i] === target){
//             return i;
//         }
//         i++;
//     }

//     return -1;
// }

// console.log(findIndexWhile([2, 5, 34, 54, 12, 28, 94], 54));

//--------------------------------------------------------------------

// 4. Using Array.prototype.indexOf

// function findIndexWithIndexOf(arr, target) {
//     return arr.indexOf(target);
// }

// console.log(findIndexWithIndexOf([2, 5, 34, 54, 12, 28, 94], 54));

//--------------------------------------------------------------------

//5. Using Array.prototype.findIndex

// function findIndexWithFindIndex(arr, target) {
//     return arr.findIndex(element => element === target); 
// }

//--------------------------------------------------------------------

//6. Using Array.prototype.some (Simulating Linear Search)

// function findIndexWithSome(arr, target){
//     let index = -1;
//     arr.some((ele, i)=>{
//         if(ele === target){
//             index = i;
//             return true;
//         }
//         return false;
//     })
//     return index;
// }

// console.log(findIndexWithSome([2, 5, 34, 54, 12, 28, 94], 54));

//--------------------------------------------------------------------

// 7. Using reduce

// function findIndexWithReduce(arr, target) {
//     return arr.reduce((acc, curr, i) => (curr === target && acc === -1 ? i : acc), -1);
// }
// console.log(findIndexWithReduce([2, 5, 34, 54, 12, 28, 94], 54));

//--------------------------------------------------------------------
// 8. Recursive Linear Search

// function findIndexRecursive(arr, target, index = 0) {
//     if (index >= arr.length) return -1; 
//     if (arr[index] === target) return index; 
//     return findIndexRecursive(arr, target, index + 1); // Recursive case
// }

// console.log(findIndexRecursive([2, 5, 34, 54, 12, 28, 94], 54));

//--------------------------------------------------------------------
//--------------------------------------------------------------------