console.time('StartUp');

console.time('loadtest02');
const {name, toto, titi} = require('./test02');
console.timeEnd('loadtest02');
require('./test03');

console.log(`Bonjour ${name}, ${toto}`);

console.log(`Titi: ${titi}`);

console.timeEnd('StartUp');
