// let some_array=[1,2,3,4,5,6]
// console.log(some_array)         //accessing all the values of an array

// console.log(some_array.indexOf(3))      //finding index of a specific values
// console.log(some_array.indexOf(9))      //if their is no such element whose index we are trying to find  out the output will be -1.

// console.log(some_array[3])      //value at a specific  index location

// console.log(some_array.includes(9))     //to check whether a given element is present their in the array or not and the output is boolean type

// console.log(some_array)
// some_array.pop()            //the pop keyword simply deletes the element in the last index of the array 
// console.log(some_array)

// some_array.push(6)
// console.log(some_array)     //the push keyword adds the  given element in the last index of the array "just opposite of pop"

// some_array.unshift(9)
// console.log(some_array)     

// //unshift adds the given element given by the user at the beginning of the array although it must be avoided as it makes the system unoptimistic but their are cases where it needs to be used 

// some_array.shift()
// console.log(some_array)

// //The work of the keyword shift is just the opposite of unshift it simply cleans or removes the element form the beginning of a given array 




let some_array =["Hello", "World","Today","is","a","nice","Day"]
console.log(some_array)

// let another_array=some_array.join()     //join converts a given array into an string with comma as a default separator 
// console.log(another_array)
// console.log(typeof another_array)


let another_array=some_array.join("-")     
// you can even specify the separator wich you want to use in order to separate the values of a given array 
console.log(another_array)

console.log(typeof another_array)
let different_array=another_array.split('-')
console.log(typeof different_array)
console.log(different_array)