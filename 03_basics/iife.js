//The file  and code which helped me lear IIFE

// IIFE is widely used for two main resons for :-
// 1)For protecting the variables inside the funtion scope to from getting poluted form the global values and vice-versa,(it protects it form name collesion )
// 2)for running the function  immeditely after its declaration 


//Syntax = () ()
// (here we write the funtion defination )
// (Another paranthesis is their which is used for its immediate execution )

function message(){
    console.log("hello user ")
}
//The above function in IIFE form 

(function message(){        //Its a named iife since it's funtion have a name
    console.log("hello user ")
})();

//When a invoked funtion is invoke it doesn't know where to end its context and hence the code becomes unpredictavle when their are two iife back to back and in order to end the invoke it is better to give a semicolon at the end of it ;
( ()=>{
    console.log("hello bro")
})();
//Immediately executing a arrow funtion without the use of variables

//Passing an argument to an iife
( (name)=>{
    console.log(`Hello ,${name}`)
})("Abhishek");

 message()