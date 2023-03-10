const osm = require('os');

// info about the current user
let userInfo = osm.userInfo();
console.log(userInfo);

// method return the uptime in seconds
console.log(`System uptime is ${osm.uptime()} seconds`);

const currentOS= {
      name: osm.type(),
      release: osm.release(),
      TotalMem:osm.totalmem(),
      FreeMem: osm.freemem(),
}

console.log(currentOS);

// Implement other functions of OS module through the documentation.



