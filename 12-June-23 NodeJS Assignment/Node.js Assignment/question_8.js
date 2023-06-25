/* Q8:- Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
that the user has subscribed1 */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('subscribe', () => {
  console.log('Thanks for Subsribing to College Wallah');
});


myEmitter.emit('subscribe');