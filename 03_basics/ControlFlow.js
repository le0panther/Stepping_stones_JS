// The codes which helped me learned Control Flow (Conditional Statements)

// if(true){       //syntax 

// } else if(true){

// }

// else{      

// }

//shorthand notation 



let balance =1000
if(balance<10000) console.log("Its an example of ShortHand Notaion ");  //it ends with a semicolon and for single line code 


//switch case

// switch(key){
//     case value:
//         break;

//     casevalue_2:
//         break;

// }


switch(balance){
    case 300:
        break;
    
    case 1000:
        console.log("Switch-Case")
        break;
    
    default:
        console.log("Value didn't match ")
        break;
}


// Handling truthy and flasy values 

//when we give a varible(it can be string , array, number and etc) as a condition and the  condition results as true its is called a truthy 
//vice-versa for falsy

//let bal=20      //truthy 
let bal=""      //falsy 

if(bal){
    console.log("Its truthy")
}else{
    console.log("Its falsy ")
}

//all the truthy and falsy values 

//falsy 
// false , 0 , -0 , null , undefined , NaN , BigInt 0n , ""    except this all are truthy values 
