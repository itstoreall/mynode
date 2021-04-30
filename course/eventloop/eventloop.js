const fs = require('fs');

console.log('Start');

setTimeout(() => {
  console.log('setTimeout happened');
}, 0);

setImmediate(() => {
  console.log('setImmediate happened');
});

new Promise((resolve) => {
  resolve('Promise happened');
  process.nextTick(() => console.log('nextTick before'));
}).then(console.log);

Promise.resolve().then(() => console.log('Promise 1 happened'));
Promise.resolve().then(() => console.log('Promise 2 happened'));
Promise.resolve().then(() => console.log('Promise 3 happened'));

process.nextTick(() => console.log('nextTick 1 happened'));
process.nextTick(() => console.log('nextTick 2 happened'));
process.nextTick(() => console.log('nextTick 3 happened'));

new Promise((resolve) => {
  resolve('Promise happened');
  process.nextTick(() => console.log('nextTick after'));
}).then(console.log);

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout in the readFile happened');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate in the readFile happened');
  });

  console.log('File read');
});

console.log('End');

/** console.log()
Start
End
nextTick before
nextTick 1 happened
nextTick 2 happened
nextTick 3 happened
nextTick after
Promise happened
Promise 1 happened
Promise 2 happened
Promise 3 happened
Promise happened
setTimeout happened
setImmediate happened
File read
setImmediate in the readFile happened
setTimeout in the readFile happened
 */
