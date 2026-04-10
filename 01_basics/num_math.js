const some_Number=400;  // always try to use the primitive method to initialize the imperative type 
console.log(some_Number)

const other_Number=new Number(4000)
console.log(other_Number)       
console.log(typeof other_Number)

console.log(String(other_Number).length)    //converted the type of the data'other_number' and applied the operations of the data-type'String' to which it is converted .

//as using this new method alocates the data into heap rather then stack making the process slow by increasing the operations like garbage collection etc.

//Hence , using 'new' keyword to initialize a primitive data-type is considered a bad practise.
