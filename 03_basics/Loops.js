for( let i=0;i<=10;i++){
    console.log(i)
}

//break and continue 
//break will get you out of the scope and end the iteration , while control on the other hand will only skip a single iteration 

const array=["Super-Man","Batman","Spider man"]
for(let index=0;index<array.length;index++){
    if(index===2){
        break
    }
    console.log(`${array[index]}`)
}