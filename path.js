const path = require("path");

console.log("Current file Info:");
console.log("filename: ", __filename)
console.log("directory: ", __dirname)

console.log("-------------------------------------------------------------------- \n");

console.log("Analysis path: " ,"\n")
console.log("Directory: ", path.dirname(__dirname));
console.log("Base name :", path.basename(__filename));
console.log("File extension: ", path.extname(__filename));
console.log("File name: ", path.basename(__filename, path.extname(__filename)));
console.log("-------------------------------------------------------------------- \n");

const filePath = "/mahadi/docu/next.pdf";

console.log("Analysis path: ", filePath, "\n")
console.log("Directory: ", path.dirname(filePath));
console.log("Base name :", path.basename(filePath));
console.log("File extension: ", path.extname(filePath));
console.log("File name: ", path.basename(filePath, path.extname(filePath)));
console.log("-------------------------------------------------------------------- \n");

const parsed = path.parse(filePath);
console.log("Parsed path object:", parsed);

console.log("Formatted path : ", path.format(parsed));
