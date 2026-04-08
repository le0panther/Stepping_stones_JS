let somenumber=45
let convert_number=String (somenumber)
console.log(typeof somenumber)
console.log(typeof convert_number)
console.log(convert_number)

let somename="Abhishek"
let convert_string=Number (somename)
console.log(typeof somename)
console.log(typeof convert_string)
console.log(convert_string)

// string when converted into a Number it's type get's converted into NaN (not a number),Hence it must not be performed or its must be keep in mind at the time of execution 

let wheather =null
let convert_whether=Number (wheather)
console.log(typeof wheather)        //null is actually an object 
console.log(typeof convert_whether)
console.log(convert_whether )

//when a null is converted into an Number type it gives us a value as 0 .Hence it must be avoided too as the value which was null now is 0.

let gender ;
console.log(typeof gender)
console.log(gender)

