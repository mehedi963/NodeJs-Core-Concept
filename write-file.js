//Write File synchonous
const fs = require("fs")

const content1 = "This is a content \n Node js is awesome!!!"

try{
    fs.writeFileSync("./output/text-sync.txt", content1)
    console.log("File written synchonous way")
}catch(err){
    console.error(err.message)
}


//Asynchonous
const content2 = "This is a content \n Asychonous way !!!"

fs.writeFile("./output/test-asyn.txt", content2, (error) =>{
    if(error){
        console.error(error.message)
    }else{
        console.log("File is written")
    }
})




