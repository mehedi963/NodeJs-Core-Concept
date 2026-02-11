const fs = require("fs")

fs.writeFileSync("./output/app.log", "Application Started\n");
console.log("File Created");

const logEntry1 = `\n ${new Date().toISOString()} user logged in \n`;
fs.appendFileSync("./output/app.log", logEntry1);
console.log("File appeneded successfully")

const logEntry2 = `${new Date().toISOString()} Data fetched \n`;
fs.appendFileSync("./output/app.log", logEntry2);
console.log("Task complete");