const {readFile, writeFile}= require("fs");

// these two methods read and write in file asynchronously.
// These two methods takes 2 args: file path and a callback function.
console.log("Start");
readFile("./SubFolder/ResultMerger.txt","utf8", (err,result)=>{
      if(err){
            console.log("inside if");
            console.log(err);
            return;
      }
      console.log(err); // get null if file read suucesfuly, otherwise an errror object. 
      console.log(result);//print the content of file.
});

console.log("Done with this task");
// This program is excuted asynchronously means, after printing "start", it will print "Done with this task" and then print the result of that callback.

// Similarly, you can use writeFile in a similar way.



