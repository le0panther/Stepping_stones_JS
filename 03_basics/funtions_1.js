//Syntax of a funtion 

// funtion "AnyName"('parameters',p1,p2,p3 ------){
    
// }
//you can even set a default value or so called the default parameters by '(p1=0)' 

function add (p1,p2){        //eg of a funtion 
    const num1=p1
    const num2=p2
    //console.log(num1+num2)  
    return num1+num2  
    console.log("someNmae")     
    //This line of code won't be getting executed as return ends the funtion and return the value where it is being called       
}

// add(90,10) 
// //Calling the funtion ,if the user won't be giving a number then a issue might come as NaN as no number have been provided to it 

const val=add(90,10)
console.log(val)        
//This line of code will result in giving us undefined as the console.log dont return the value , but when we use "return" in place of console.lod inside the funtion it will result in printing the vlaue 

