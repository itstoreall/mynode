console.log('execPath:', process.execPath);
console.log('version:', process.version);
console.log('platform:', process.platform);
console.log('arch:', process.arch);
console.log('title:', process.title);
console.log('pid:', process.pid);
console.log('cwd():', process.cwd());
console.log('argv:', process.argv);

// Handler (addEventListener)
process.on('exit', (code) => {
  console.log('Exit: ' + code);
});

process.exit(1);
