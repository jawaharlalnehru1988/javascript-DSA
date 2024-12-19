//find max value from an array

// function findMax(arr){
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){ //if current element is greater than max
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([1,2,3,4,5,6,7,8,9,10])); 

//--------------------------------------------

//find min value from an array
// function findMin(arr){
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }

// console.log(findMin([1,2,3,4,5,6,7,8,9,10]));

//--------------------------------------------

//find the second max value from an array
// function findSecondMax(arr){
//     let max = arr[0]; 
//     let secondMax = arr[0]; 
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){ 
//             secondMax = max; 
//             max = arr[i]; 
//         }else if(arr[i] > secondMax){
//             secondMax = arr[i];
//         }
//     }
//     return {secondMax, max};
// }

// console.log(findSecondMax([1,3,2,5,4,6,7,8,9,10]));

//--------------------------------------------

//find the second min value from an array
// function findSecondMin(arr){
//     let min = arr[0]; 
//     let secondMin = Infinity; 
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){ 
//             secondMin = min; 
//             min = arr[i]; 
//         }else if(arr[i] < secondMin && arr[i] != min){
//             secondMin = arr[i];
//         }
//     }
//     return {secondMin, min};
// }

// console.log(findSecondMin([1,3,2,5,4,6,7,8,9,10]));

//--------------------------------------------
//find the third max value from an array

// function findThirdMax(arr){
//     let max = arr[0]; 
//     let secondMax = arr[0]; 
//     let thirdMax = arr[0]; 
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){ 
//             thirdMax = secondMax; 
//             secondMax = max; 
//             max = arr[i]; 
//         }else if(arr[i] > secondMax){
//             thirdMax = secondMax;
//             secondMax = arr[i];
//         }else if(arr[i] > thirdMax){
//             thirdMax = arr[i];
//         }
//     }
//     return {thirdMax, secondMax, max};
// }

// console.log(findThirdMax([1,3,2,5,4,6,7,8,9,10]));

//--------------------------------------------
//find the third min value from an array

// function findThirdMin(arr){
//     let min = arr[0]; 
//     let secondMin = Infinity; 
//     let thirdMin = Infinity; 
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){ 
//             thirdMin = secondMin; 
//             secondMin = min; 
//             min = arr[i]; 
//         }else if(arr[i] < secondMin && arr[i] != min){
//             thirdMin = secondMin;
//             secondMin = arr[i];
//         }else if(arr[i] < thirdMin && arr[i] != min && arr[i] != secondMin){
//             thirdMin = arr[i];
//         }
//     }
//     return {thirdMin, secondMin, min};
// }

// console.log(findThirdMin([1,3,2,5,4,6,7,8,9,10]));

