
let mysum=Symbol("result")
const object_1={
    name:"Abhishek Pant",
    age:19,
    [mysum]:3,      //this is how the symbol is assigned value
    Gender:"Male",
    Nationality:"Indian",
    email:"Abhishek@Panthers.com"
}


// Accesing elements form an object 

//1) Dot Notation (Not recommended) ,the reason is clear if the key is written with the help of inverted comma then it cant be accessed with it "name"

console.log(object_1.name);

//2) Bracket Notation (recommended) , the inverted comman keys can also be accesed by it "name"

console.log(object_1["name"])

//accesing a symbol 

console.log(object_1[mysum])
console.log(object_1);

object_1.name="Leo Panther"
Object.freeze(object_1)     
// object have been freezed and now its can't be modified but nested object inside the freezed object can still be modified 
object_1.name="Axel Blazze"
console.log(object_1)


//Adding a funtion in the existing object and assing value to it at the same time using dot notation but in order to do it i meed to comment out "object.freeze"
object_1.message= function () {
    console.log("Hello Reader")
}

console.log(object_1)

