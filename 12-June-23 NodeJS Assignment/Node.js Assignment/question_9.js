/*While working with the events module, one interesting observation is that when an event is created and called, the associated event handler is triggered1 However, what happens if we remove an event and then try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event handler and observe what happens when we call it. */

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Event handler
const eventHandler = () => {
  console.log('Event handler called!');
};

// Register the event handler
myEmitter.on('myEvent', eventHandler);

// Call the event
myEmitter.emit('myEvent'); // Output: Event handler called!

// Remove the event handler
myEmitter.off('myEvent', eventHandler);

// Call the event again
myEmitter.emit('myEvent'); 