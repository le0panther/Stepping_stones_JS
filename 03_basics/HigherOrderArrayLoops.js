//for of 

let array=[1,2,3,6,5,4,5,6,5,4]

for (const arr of array) {
   // console.log(arr)
    
}

const string="Hello World "
for (const str of string) {
    if(str===" "){
        continue
    }
  //  console.log(str)
    
}

//jada kuch nahi for of is used to print the entire value without the need for declaration of any variable and increment operator in the block of the  for 
//hence forof can be used in order to iterate through array 


//Map

//maps thoda padh lena kyuki usko abhi may skip kar araha hu 

// const map=new Map
// map.




//for in 


const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4"
}

for (const key in obj1) {
    console.log(`${key} : ${obj1[key]}`)
      
}
//forin   is quite like for of but it is made for iterating through objects 


//The major difference between forin and forof is that the forin iterates through keys and the forof iterates through the values 


//for Each /Higher Order Funtion

//for each is a smart funtion , it takes a callback funtion(A callback function is simply a function that you pass as an argument into another function, to be executed (called back) later.) as a argument and takes all the values form the array to which it is attached to and bring them inside the funtion does it's job and then shift to next value

//It works better with array and if what to use with object then convert it to one 
// const user = { name: 'Alice', age: 25, role: 'Admin' };

// Object.keys(user).forEach(key => {
//   console.log(key); 
// });


// array.forEach(function (num){
//     console.log(num*0)
// })

// array.forEach((num)=>{          //with the help of arrow funtion 
//     console.log(num*0)
// })

// function newMethod(val){
//     console.log(val)
// }

//array.forEach(newMethod)        //Another Way  , funtion ka reference dena hai ( matlab uska naam ),usko waha execute nahi kar dena hai (matlab call mat kar dena )

//It usually takes three arguments (first one for iteration )(second one for index of the iteration val)(third one for the entire array)

array.forEach((val,index,array)=>{
   // console.log(val,index,array)
})

//it will give us output as val , index then the entire array too 


//also it is widely used in the case where their is object inside of an array as its elements 
const NewArray=[
    {name:"Abhishek Pant"},
    {name:"Leo Panther"},
    {name:"Axel Blazze"}
]

NewArray.forEach((element)=>{
    console.log(element.name)
})

//Simple and Easy way to do complex work 





