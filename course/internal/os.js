const os = require('os');

/**
 * os - it's module which gives all the information about
 * our operation sistem
 *
 * Claster - this module allows to scale the node.js horizontally
 */

console.log(`Host name: ${os.hostname()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Lifetime: ${(os.uptime() / 60 / 60).toFixed(2)} hours`);
console.log(`Version: ${os.release()}`);
console.log(`Processor architecture: ${os.arch()}`);
console.log(`Number of processors: ${os.cpus().length}`);
console.log(`Memory: ${(os.totalmem() / 1e9).toFixed(2)} Gb`);
console.log(`Free memory: ${(os.freemem() / 1e9).toFixed(2)} Gb`);
