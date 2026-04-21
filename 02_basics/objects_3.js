//Here we are going to study about destructuring an Object 
const object_1={
    name:"SomeName",
    Age:"someAge",
    Gender:"AnyGender"
}

console.log(object_1.name);     
//here we have to write the entire syntax to print the name 
//But when we work with database we have to call single/multiple values multiple times and its make it a bit less efficient to wirte this syntax everytime 

//Hence , here destructring comes in place

const{name}=object_1;
console.log(name);      //now instead of writing "object_1.name" i can simply write name.

// if you don't want to write the simple name and convert it into some other name then the syntax is given below

const {name:n}=object_1
console.log(n);         //Output will be same no matter which method the user approach with 
