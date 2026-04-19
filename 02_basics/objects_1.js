
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

