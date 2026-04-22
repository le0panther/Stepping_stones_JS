//Here we are going to study scopes .yes an entire file on scope '{}' this curly braces is called scopes 

 let a=0;
 const b=1;
 var c=9;

function SomeFuntion(){
    console.log(a)      // All the global declared values can be accesed form any where in the code 
    console.log(b)
    console.log(c)

   
}

if(true){
     let d=5
    const e=6
    var f=20
}

SomeFuntion()
console.log(f)      
// f must not be accesible but still it is accesible which proves that var don't play by the scope rules and hence mostly let and const are used instead of var 

//Interview 

// A closure is when we are trying to acess a variaable from a outer funtion even when the outer funtion had finished executing 