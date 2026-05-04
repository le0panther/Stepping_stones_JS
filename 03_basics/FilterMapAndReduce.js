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

  console.log(vari)
