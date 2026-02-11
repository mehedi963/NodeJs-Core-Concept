const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "This is a temp file")
console.log("Temp file created")

if(fs.existsSync("./output/temp.txt")){
    console.log("File exits......")

    fs.unlinkSync("./output/temp.txt");
    console.log("File deleted")
}

try{
    fs.unlinkSync("./output/temp.txt")
}catch(error){
    console.error(error.message)
}

//Asynchonous
fs.writeFile("./output/temp2.txt", " This is another temporary file", (err)=>{
    if(err) return console.error(err.message);
    console.log("Another file created");

    fs.unlink("./output/temp2.txt", (err)=>{
        if(err){
            console.error("ERROR:", err.message)
        }else{

            console.log("File delete successfully")
        }
    })
})