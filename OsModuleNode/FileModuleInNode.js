const {readFileSync, writeFileSync} = require('fs');
// Above , we are doing destructuring.

const first = readFileSync("./SubFolder/fsMod.txt", "utf8");
const second = readFileSync("./SubFolder/nodeMod.txt","utf8");
console.log(first);
console.log(second);

// Run this file using node command in terminal so that you are in the right directory.

writeFileSync('./SubFolder/ResultMerger.txt',`Hello, this is the file which is of combination of those two files: ${first}  ${second}`);
// Above method will create a new file if that is not present.
// Above method take some more options that can be used:
      // encoding: Specifies the file encoding. This can be a string such as 'utf8', 'ascii', or 'binary'. The default encoding is 'utf8'.
      // mode: Specifies the file mode (permissions) as an octal number or a string such as '0o666' or 'rw-rw-rw-'. The default mode is '0o666'.
      // flag: Specifies the file system flag. This can be 'w' (write), 'a' (append), or 'wx' (write and create). The default flag is 'w'.


      




