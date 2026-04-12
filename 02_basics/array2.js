let Marvel=['Captain-America','Iron Man',"Hulk","Thor","Hawkeye","Black-Widow"]
let DC=["superman","Batman","Aquaman"]

Marvel.push(DC)      
//push when used on array , makes the array mutable and return the length of the modified array so if we want to see the value added in the array we need too print the original array

//it also result in a nested array if used with an array
console.log(Marvel)

console.log(Marvel.concat(DC))         //concat is used to concat only two array not more than that and the result is not a nested array

const new_arr=[...Marvel,...DC]     //this is called Spread Operator
console.log(new_arr);               //But this method is widely used as it can easily concatinate more than two array and the ouput is not nested

