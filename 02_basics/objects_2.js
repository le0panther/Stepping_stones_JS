//here we are creating and using Singleton objects with constructors 

const object_1= new Object()        
//creating an object with new keyword (singleton)
//console.log(object_1) 

//Entering values in the object 
object_1.name="Abhishek Pant"
object_1.Gender="Male"
object_1.Age=20

//console.log(object_1)
//console.log(Object.keys(object_1))      //Prints the keys of the object "The return type is an array"
//console.log(Object.values(object_1))    //Prints the values of the objects "The return type is an array"
console.log(Object.entries(object_1))

//Entering an another object inside the object_1 and and accessing it's values

const object3={
    name:{
    first_name:"Abhishek",
    Last_name:"Pant"

    }
}

//accessing values form the object3 
//console.log(object3.name.Last_name)     //Prints Specifically the Last name
//console.log(object3.name)               //Prints the entire object inside the name

//Combining two objects just like we did in array's using "Spread Operator "

const obj_2={1:"a",2:"B"}
const obj_3={3:"C",4:"D"}

//Combines them without creating a new object (Not used widely only in particular cases)
// Object.assign(obj_2,obj_3)
// console.log(obj_2)

//mehtod 2 for doing the same (Widely used in the Modern web Development)
const newObject={...obj_2,...obj_3}     
//this method combines them together  and creates a new object 










