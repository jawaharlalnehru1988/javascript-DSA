// const strings = ["apple", "bat", "cat", "elephant", "dog"];
// const numbers = [-1, -5, 10, 4, 2, 6, 3, 7, 1, 9, 5, 3, -5];

// function removeDublicates(arr){
//     let newArr = [];
//     for(let i = 0; i< arr.length; i++){
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// const result = removeDublicates(numbers);
// console.log('result :', result);


// function sortStringByLength(str){
//         for(let i = 0; i < str.length; i++){
//             for(let j = 0; j < str.length-1; j++){
//                 if(str[j].length > str[j+1].length){
//                     const temp = str[j];
//                     str[j] = str[j+1];
//                     str[j+1] = temp;
//                 }
//             }
//         }
//         return str;
// }

// const sortedArr = sortStringByLength(strings);
// console.log(sortedArr);

// function sortStringByLength(strArr){
//     const sortedStrArr = strArr.sort((a, b) => a.length - b.length);
//     console.log(sortedStrArr);
//     return sortedStrArr;
// }

// const result = sortStringByLength(strings);
// console.log('result :', result);

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

// const resultSort = sortNum(result);
// console.log(resultSort);
// console.log(resultSort[resultSort.length-3]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function evenOddArr(arr){
//     const evenNum = [];
//     const oddNum = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenNum.push(arr[i]);
//         } else {
//             oddNum.push(arr[i])
//         }
//     }

//     return [...evenNum, ...oddNum];
// }

// console.log(evenOddArr(numbers));

// const array = [1, 2, 3, 4, 5];

// function reverseArr(array){
//     let reverse = [];
//     for(let i = array.length-1; i >= 0; i--){
//         reverse.push(array[i]);
//     }
//      return reverse;
// }

// console.log(reverseArr(array));

// function reverseArr(arr){
//     const reversed = arr.slice().reverse();
//     return reversed;
// }
// console.log(reverseArr(array));

// function findMedian(arr){
//     if(arr.length === 0){
//         throw new Error("Array cannot be empty");
//     }
//     arr.sort((a, b)=> a-b);

//     const mid = Math.floor(arr.length / 2);

//     if((arr.length % 2 === 0)){
//         return (arr[mid -1] + arr[mid]) /2;
//     }
//     return arr[mid];
// }

// const array = [3, 5, 1, 6, 7];
// const array2 = [3, 5, 1, 6, 7, 8];
// console.log(findMedian(array));
// console.log(findMedian(array2));

function generatePermutations(str) {
    const results = [];
  
    function permute(arr, temp = []) {
      if (arr.length === 0) {
        results.push(temp.join(""));
      } else {
        for (let i = 0; i < arr.length; i++) {
          const current = arr.slice(); // Copy the array
          const next = current.splice(i, 1); // Remove the current character
          permute(current, temp.concat(next)); // Recurse with the rest
        }
      }
    }
  
    permute(str.split(""));
    return results;
  }
  
  // Example usage
  const permutations = generatePermutations("ABC");
  console.log(permutations);
  






