const fs = require("fs")
console.log("start reading here.............")

fs.readFile("./data/dairy.txt", "uft-8", (error,data) =>{
    if(error){
        console.error("error happend...,", error.message)
    }
    console.log("File content : ")
    console.log(data)
})

console.log("This runs immediately")