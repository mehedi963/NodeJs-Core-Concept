const fs = require("fs");

console.log("Start reading")

try{
    const data = fs.readFileSync("./data/dairy.txt", "utf-8") 
    console.log("File Content..................................................")
    console.log(data)

}catch(err){
    console.error(err.message)
}