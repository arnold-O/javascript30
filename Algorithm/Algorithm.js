//////////******ARRAYS ********/////////

// const arr = [1, 2, 3, 'hismab']

// // for(const item of arr){
//     // }
//     arr.splice(2, 1)

//         console.log(arr)

//         // for Arrays: splice, slice, filter, reduce, concat, sort, find, map, set.
//         //For objects:  keys, entries, values,
// //////////******ARRAYS ********/////////
function strFunction(str) {
  return str.split("").reduce((total, curr) => {
    return curr + total;
  }, "");
}
const valueInput = strFunction("Arnold");
console.log(valueInput);

// PALINDROMES

const palindrome = (params) => {
  // const reversed = params.split("").reduce((total, curr) => {
  //     return curr + total;
  //   }, "");
  let initial = "";

  for (let val of params) {
    initial = val + initial;
  }

  return initial === params;
};
console.log(palindrome("preerp"));

// Interger Reversal
