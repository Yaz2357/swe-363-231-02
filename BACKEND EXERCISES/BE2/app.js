const eventEmitter = require('./eventEmitter');


function logIn(user){
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${user} logged in`);
}

eventEmitter.on('userLoggedIn', logIn);

function logOut(user){
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${user} logged out`);
  }

eventEmitter.on('userLoggedOut', logOut);

// Simulate users logging
function simulate() {
  const usersList = ['USER_1', 'USER_2', 'USER_3', 'USER_4', 'USER_5', 'USER_6'];
  const randomUser = usersList[Math.floor(Math.random() * usersList.length)];
  eventEmitter.emit('userLoggedIn', randomUser);
  const randomTime = Math.random() * (2 - 0.1) + 0.1;
  setTimeout(simulate, randomTime * 1000);
}

simulate();