let array=[1,2,3,4,5,6,7,8,9,10]
//forEach is the Doer: It loops through the array to execute an action on every item. (It returns nothing).

array.forEach((item)=>{     //simply using it to print the values
   // console.log(item)
})

const val=array.forEach((item)=>{     
    //storing and printing the val itself to see what will the forEach value return i
   console.log(item)

})

console.log(val)        
//it will return an undefined at the end as forEach can't be used to return any values as its return values is always undefined 


//filter 
//filter is the Bouncer: It loops through the array to test a condition and keeps only the items that pass. (It returns a new array).

// const news =array.filter( (item)=>{         //Here we are using an condition to check and then returning it 
//     if(item>4){
//         return item
//     }
// })
//But what if we don't check any condition and just does return 

const news=array.filter( (item)=>{      //if you dont check a condition and simply retuns it the js will throw an error
    if(Boolean)  {
        return item
    }
})

console.log(news)

