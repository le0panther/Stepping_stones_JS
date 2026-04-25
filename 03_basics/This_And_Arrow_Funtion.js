//This file will be containing the notes that helped me learn " this and arrow funtion" 

const obj1={        
    name:"Abhishek Pant",
    Price:199,
    welcome:function () {
        console.log(`Welcome ${this.name} to the server .`)
    }
}
//jab hum current context ko refer karte hai tab hum "this" keyword ka use karte hai ,meaning trying to refer or use the value in the current scope .

console.log(obj1.welcome())

//But when this is written globally , i mean when this is not inside any particular scope but as a global scopt then what will be happening.