const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // ввод из стандартного потока
  output: process.stdout, // вывод в стандартный поток
});

// rl.on
rl.on('line', (cmd) => {
  console.log(`You just typed: ${cmd}`);
});

// node readline.js rl.question
rl.question('Как вас зовут?', (answer) => {
  console.log(`Приятно познакомиться ${answer}`);
});

// заблокировать ввод
rl.pause();

// закрыть
rl.close();
