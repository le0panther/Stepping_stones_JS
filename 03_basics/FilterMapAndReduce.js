let array=[1,2,3,4]

array.forEach((item)=>{     //simply using it to print the values
   // console.log(item)
})

const val=array.forEach((item)=>{     //storing and printing the val itself to see what will the forEach value return i
    console.log(item)
})

console.log(val)        
//it will return an undefined at the end as forEach can't be used to return any values as its return values is always undefined 

