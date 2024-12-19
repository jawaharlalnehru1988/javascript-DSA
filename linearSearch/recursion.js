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


function fibonacci(n){
if(n === 0) return 0;
if(n === 1) return 1;

return fibonacci(n -1) + fibonacci(n - 2);
}

for(let i = 0; i <= 8; i++){
    console.log(fibonacci(i));
}

//----------------------------------------------------------------

// function generatePermutations(str) {
//     const results = [];
  
//     function permute(arr, temp = []) {
//       if (arr.length === 0) {
//         results.push(temp.join(""));
//       } else {
//         for (let i = 0; i < arr.length; i++) {
//           const current = arr.slice(); // Copy the array
//           const next = current.splice(i, 1); // Remove the current character
//           permute(current, temp.concat(next)); // Recurse with the rest
//         }
//       }
//     }
  
//     permute(str.split(""));
//     return results;
//   }
  
//   // Example usage
//   const permutations = generatePermutations("ABC");
//   console.log(permutations);
  

