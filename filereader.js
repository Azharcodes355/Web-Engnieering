
// const  fs = require("fs");

// fs.readFile("a.txt","utf8", (err,mydata)=>{
//     if ( err){
//         console.log("Error accured",err);
//     }
//     else{
//         console.log("data is :",mydata);
//     }
// });

const  fs = require("fs");
const content =  "Hello Azhar"

fs.writeFile("a.txt",content, (err)=>{
    if ( err){
        console.log("Error accured",err);
    }
    
});
