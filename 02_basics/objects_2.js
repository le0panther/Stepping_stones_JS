//here we are creating and using Singleton objects with constructors 

const object_1= new Object()        
//creating an object with new keyword (singleton)
//console.log(object_1) 

//Entering values in the object 
object_1.name="Abhishek Pant"
object_1.Gender="Male"
object_1.Age=20

//console.log(object_1)

//Entering an another object inside the object_1 and and accessing it's values

const object3={
    name:{
    first_name:"Abhishek",
    Last_name:"Pant"

    }
}

//accessing values form the object3 
console.log(object3.name.Last_name)     //Prints Specifically the Last name
console.log(object3.name)               //Prints the entire object inside the name

//Combining two objects just like we did in array's

const obj_2={1:"a",2:"B"}
const obj_2={3:"C",4:"D"}



