const EventEmitter = require('events');
const fs = require('fs');

/**
 * emit - it's to call event
 * первым параметром всегда пердается ошибка
 * вторым параметром data или т.п.
 */

class MyEmmiter extends EventEmitter {}

const me = new MyEmmiter();

me.on('read', (err, data) => {
  const result = data.toUpperCase();
  me.emit('write', result);
});

me.on('write', (data) => {
  fs.writeFile('newpath.js', data, (err) => {
    console.log('Write');
  });
});

fs.readFile('../internal/path.js', 'utf-8', (err, data) => {
  me.emit('read', err, data);
});
