const { readFileSync, writeFileSync } = require('fs'); //same as const fs = require('fs'); fs.readFileSync; fs.writeFileSync

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// to create or update file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`
);

// to append to existing file
writeFileSync('./content/result-sync.txt', ` Hello World`, { flag: 'a' });
console.log('done with this task');
console.log('starting the next one');
