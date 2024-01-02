var users=require('./object');

// Map the seniority levels
const seniorityLevels = {
    "Senior": 3,
    "Python": 2,
    "Intern": 1
};

const arrOfObjects = Object.entries(users);
    // console.log(sortedUsers);
let arrOfUsers=arrOfObjects.map(([name, user]) => ({ name, ...user }))
//    console.log(arr);
  let sortedUsers=arrOfUsers.sort((a, b) => {
        const seniorityA = seniorityLevels[a.desgination.split(" ")[0]];
        const seniorityB = seniorityLevels[b.desgination.split(" ")[0]];

        if (seniorityA !== seniorityB) {
            return seniorityB - seniorityA;
        } else {
            return b.age - a.age;
        }
    });

    let obj=sortedUsers.reduce((acc, { name, ...user }) => {
        acc[name] = user;
        return acc;
    }, {});
  
// console.log(sortedUsers);

console.log(arrOfUsers);