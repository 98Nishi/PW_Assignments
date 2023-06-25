/*challenge, your task is to determine the current maximum number of event listeners associated with an event and then set the maximum number of event listeners to 5. Note that the default maximum number of listeners might vary. Your task is to limit the number of listeners to 5 */

// Get the default maximum number of event listeners
const EventEmitter = require('events');
const defaultMaxListeners = EventEmitter.defaultMaxListeners;
console.log('The default maximum number of event listeners is:', defaultMaxListeners);

// Set the maximum number of event listeners to 5
EventEmitter.defaultMaxListeners = 5;
console.log('The updated maximum number of event listeners is:', EventEmitter.defaultMaxListeners);