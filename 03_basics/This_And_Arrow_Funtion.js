//This file will be containing the notes that helped me learn " this and arrow funtion" 

const obj1={        
    name:"Abhishek Pant",
    Price:199,
    welcome:function () {
        console.log(`Welcome ${this.name} to the server .`)
        console.log(this) 
        //here this will be giving result based on current context which is here console.log(this) is equal to console.log(obj1)
    }
}
//jab hum current context ko refer karte hai tab hum "this" keyword ka use karte hai ,meaning trying to refer or use the value in the current scope .

console.log(obj1.welcome())

//But when this is written globally , i mean when this is not inside any particular scope but as a global scopt then what will be happening.

console.log(this)
//here we will be receving an empty object as their is no global scope object inside the node.js enviroment 

//But in browser their will be windows object and hence it will not be empty , also this window object is reason why we are able to perform various events on the browser .

//The above all are the prerequisites for the arrow funtion 




//*********************************this with the funtion or inside the funtion needs to be learned a bit more as i am not quite sure about it  */

const fun=function (){
    console.log(this)
}
console.log(fun())//a huge amount of data will be received related to the funtion 
//when this is used inside a funtion it refers to its funtion scopte and returns the data on the scope 

//Arrow funtion syntax 

const arrow= ()=>{
    console.log(this)       
}
console.log(arrow())
    //here an empty object will be received as the output  because  the arrow funtion refers to the global scope of the  node.js enviroment which is empty 

//Basic syntax of arrow funtion
// ()=>{}

// const sum=(num1,num2)=>{            //This is called explicit conversion 
//     return num1+num2
// }
// console.log(sum(12,20))

const sum=(num1,num2)=> (num1+num2)     //This is implicit conversion 
//here we replace the curly braces by parathesis and we don't need to write return 
//also this is only done for a single line of code 
console.log(sum(12,20))

//arrow funtion is also used in the case when we need to access the global scope with this and not the funtion scope s