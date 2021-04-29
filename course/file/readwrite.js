const fs = require('fs');
const file = '../internal/path.js';

console.log(__dirname);
console.log(__filename);

fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err.nessage);
    return;
  }

  if (!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp');
  }

  console.log('data:', data);
  console.log('data.toString():', data.toString());

  fs.writeFile(
    './temp/path.js',
    `${data.toString()}console.log('Successfully updated')`,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
});
