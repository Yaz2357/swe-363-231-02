const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const eventEmitter = new CustomEventEmitter();

// Listen for "userLoggedIn" event
eventEmitter.on('userLoggedIn', (user) => {
  console.log(`${new Date().toISOString()}: ${user} logged in`);
});

// Listen for "userLoggedOut" event
eventEmitter.on('userLoggedOut', (user) => {
  console.log(`${new Date().toISOString()}: ${user} logged out`);
});

// Simulate user logins
function simulateUserLogins() {
  const user = `USER_${Math.floor(Math.random() * 100)}`;

  // Emit "userLoggedIn" event
  eventEmitter.emit('userLoggedIn', user);

  setTimeout(() => {
    // Emit "userLoggedOut" event
    eventEmitter.emit('userLoggedOut', user);
    simulateUserLogins(); // Simulate next login
  }, Math.random() * 1900 + 100); // Random timeout between 0.1 and 2 seconds
}

// Start simulating user logins
simulateUserLogins();