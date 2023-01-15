//////////******ARRAYS ********/////////



// const arr = [1, 2, 3, 'hismab']


// // for(const item of arr){
//     // }
//     arr.splice(2, 1)
    
//         console.log(arr)



//         // for Arrays: splice, slice, filter, reduce, concat, sort, find, map, set.
//         //For objects:  keys, entries, values,
// //////////******ARRAYS ********/////////
function strFunction(str){
    return str.split('').reduce((total, curr)=>{
        return curr + total;

    }, '')
}
const valueInput = strFunction('Arnold')
console.log(valueInput)

