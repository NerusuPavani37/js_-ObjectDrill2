var users=require('./object');


let videoGamePlayers =Object.keys(users).filter((name) => {
   return users[name].interests.includes("Video Games") || users[name].interests.includes("Playing Video Games")});

   console.log(videoGamePlayers);

