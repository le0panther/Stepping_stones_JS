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

//for the moment when we dont know how many arguments we are going to receive and we are going to perform operations on them 

// This is the moment when the 'spread operator ...' comes in hand 

// function calculateCartPrice(num1){              
// //This funtion is excellent to handle the once argument but it fails when we dont know how many arguments we are going to receive for that moment we use spread operator 
//         return num1

// }

// function calculateCartPrice(... num1){
//     return num1     //return's a array and now we can use it however we want 
// }

function calculateCartPrice(val1,val2,...num1){
    return num1     
    //now this time it will simply retun the value which is left after assiging the inintial values to the val1 and val2
}

console.log(calculateCartPrice(400,100,200))