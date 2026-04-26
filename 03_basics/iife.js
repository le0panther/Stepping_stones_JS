//The file  and code which helped me lear IIFE

// IIFE is widely used for two main resons for :-
// 1)For protecting the variables inside the funtion scope to from getting poluted form the global values and vice-versa,(it protects it form name collesion )
// 2)for running the function  immeditely after its declaration 


//Syntax = () ()
// (here we write the funtion defination )
// (Another paranthesis is their which is used for its immediate execution )

// function message(){
//     console.log("hello user ")
// }
//The above function in IIFE form 

(function message(){
    console.log("hello user ")
})()


// (()=>{
//     console.log("hello bro")
// })()  
//Immediately executing a arrow funtion without the use of variables


// message()