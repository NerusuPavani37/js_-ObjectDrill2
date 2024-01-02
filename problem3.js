
let users=require('./object');

let masterDegreeUsers =Object.keys(users).filter(names => users[names].qualification == "Masters");
console.log(masterDegreeUsers);