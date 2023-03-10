const _ = require("lodash");
const items= [1,[2,[3,[4,[5]]]]];
// items is a nested array.

// flattenDeep() is a method in JavaScript that recursively flattens an array of nested arrays into a single array. It essentially "flattens" any subarrays within the array into the parent array.

const newItem = _.flattenDeep(items);
console.log(newItem); //[1,2,3,4,5]

// Sometimes, when you create React project or you make by you own named "gitignore". in this file, we put the nmae of files that are going to ignored by source control while we push our project on the github.



