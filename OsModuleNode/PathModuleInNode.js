const path = require('path');
console.log(path.sep);

const filepath = path.join("/Built-in-Modules","OsModuleNode","SubFolder","nodeMod.txt");
console.log(filepath);

const base = path.basename(filepath); //give you the nodeMod.txt. 
console.log(base); 

const absolute  = path.resolve(__dirname,"Built-in-Modules","OsModuleNode","SubFolder","nodeMod.txt")
// __dirname: give the current directory.
console.log(absolute); // you get the absolute path.



