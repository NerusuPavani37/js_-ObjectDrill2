
var users = require('./object');

let germanyUsers=Object.keys(users).filter(names => users[names].nationality === "Germany");
console.log(germanyUsers);