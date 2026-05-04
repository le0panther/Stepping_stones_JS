let array=[1,2,3,4,5,6,7,8,9,10]
//forEach is the Doer: It loops through the array to execute an action on every item. (It returns nothing).

array.forEach((item)=>{     //simply using it to print the values
   // console.log(item)
})

const val=array.forEach((item)=>{     
    //storing and printing the val itself to see what will the forEach value return i
   //console.log(item)

})

//console.log(val)        
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

//console.log(news)

//Exercises on filter / Foreach 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //genre ==="history"/publish after 2000

  let vari = books.filter( (item)=>{
    return item.genre==='History'
  })

  vari = books.filter( (item)=>{          
    //Now here we will be overwritting the vari by not , declaring it the second time and not writing const before vari but const cant be rewrite
    return item.publish > 2000
  })

  //console.log(vari)



//MAP
//You should use map exclusively when your goal is to transform data from one form into another, and you need to use the resulting new array.
//When a developer sees forEach, they instantly know: "This code is performing an action (like updating the UI or calling an API)."

//When a developer sees map, they instantly know: "This code is transforming data into a new array."
  

let  some_variable=array.map( (item)=>{
    return item                             
    //jab hum isme condition check karte  tab ye boolean output deta hai , or agar operation perform karte hai tab normal behaviour
})

//console.log(some_variable)

//Chaining 

//In Chaining we chain together different methods like .map().map(),.filter().map , etc 
//The input/argument to the next mehtod i the output or the return value of the first 


some_variable=array.map( (item)=>{
    return item+1
}).map( (item)=>{
    return item*10
})




//Reduce 

//reduce is the Juicer: It squeezes an entire array of items down into a single value (like a total number, a single string, or one object).(sum kar ke value return ya print kar deta hai )

//do argument accept karta hai accumalator and current value , inintialy accumulator ko value nahi pata hota hai toh vao scope ke bad comma dal ke likhte hai , fir accumulator or current value ka sum wapis se accumulator may cahla jata hai 

some_variable=array.reduce( (arr,curr)=>{
    return arr+curr
},0)

console.log(some_variable)