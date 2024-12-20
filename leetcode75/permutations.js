// Write a function that takes an array of unique integers and returns an array of all permutations of those integers in no particular order.

// function permutations(arr){
//     const result = [];
//     const permute = (arr, m = []) => {
//         if(arr.length === 0){
//             result.push(m);
//         } else {
//             for(let i = 0; i < arr.length; i++){
//                 let curr = arr.slice();
//                 let next = curr.splice(i, 1);
//                 permute(curr.slice(), m.concat(next));
//             }
//         }
//     }
//     permute(arr);
//     return result;
// }

// console.log(permutations(["A","B","C"])); // Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]


//--------------------------------------------

// permutations of a string

function permutations(str){
    const result = [];
    const permute = (str, m = '') => {
        if(str.length === 0){
            result.push(m);
        } else {
            for(let i = 0; i < str.length; i++){
                let curr = str.substring(0, i) + str.substring(i + 1);
                let next = str[i];
                permute(curr, m + next);
            }
        }
    }
    permute(str);
    return result;
}

console.log(permutations("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
