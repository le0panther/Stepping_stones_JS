const some_date=new Date()
console.log(some_date)      //easiest way but ,gives the most unrealiable output -> '2026-04-10T18:12:34.877Z'

console.log(some_date.toDateString())     //converted it to Date string 'Fri Apr 10 2026'

console.log(some_date.toString())       //converted to normal string 'Fri Apr 10 2026 23:48:04 GMT+0530 (India Standard Time)'

console.log(some_date.toLocaleString())     //according to me the best way till now to handle dates .

let timestamp= Date.now()     //Date.now gives us time in milliseconds form theat ecma of 1970 and to convert int into seconds divide it by 1000
console.log(timestamp)

console.log(`Time in second's is ${timestamp/1000} seconds`)        //now this is giving output in seconds but in float form 

console.log(`The Time in seconds is ${Math.floor(timestamp/1000)}`)     //now the output is perfect 


//This timestamp concept is widely used in website where booking takes place like E-commerce and Hotel management , by comparing the timestamp they give the preference to the one with the less timestamp

//CTRL + SPACE dabane se recommend kar deta hai VS code ki kya-kya mehtod or properties hum apply kar sakte hai 

//Also agar aap cahte hai ki jo data ka style hai vo aap decide kare ki kon pehle or kese aayega toh plz use .toLocaleString as it helps you get our 'Custom date Output'
