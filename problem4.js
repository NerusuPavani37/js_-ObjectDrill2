var users=require('./object');

const arrOfObjects= Object.entries(users);
// console.log(groupedUsers);

let groupedUsers=arrOfObjects.reduce((acc, [name, user]) => {
 const programmingLanguage = Object.keys(acc);

//  console.log(programmingLanguage);
let value=programmingLanguage.find(key => user.desgination.toLowerCase().includes(key.toLowerCase()));
    if (value) {
        acc[value].push(name);
    }
    return acc;
}, {
    "Golang": [],
    "Python": [],
    "JavaScript": []
});


console.log(groupedUsers);




