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


//for Each 

//for each is a smart funtion , it takes a callback funtion(a funtion with no name) as a argument and takes all the values form the array to which it is attached to and bring them inside the funtion does it's job and then shift to next value

//It works 

array.forEach(function (num){
    console.log(num*0)
})


