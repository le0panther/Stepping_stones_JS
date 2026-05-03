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


