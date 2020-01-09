const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log('Immeadiate 1 finished'));

fs.readFile('text-file.txt', () => {
    console.log('I/O finished');

    console.log('--------------------------------');
    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log('Immeadiate 2 finished'));

    process.nextTick(() => console.log('Process.nextTick'))

    crypto.pbkdf2Sync('password', 'salt', 1000000, 1024, 'sha512');
    console.log(Date.now() - start, 'password exncrypted');

    crypto.pbkdf2Sync('password', 'salt', 1000000, 1024, 'sha512');
    console.log(Date.now() - start, 'password exncrypted');


    crypto.pbkdf2Sync('password', 'salt', 1000000, 1024, 'sha512');
    console.log(Date.now() - start, 'password exncrypted');


    crypto.pbkdf2Sync('password', 'salt', 1000000, 1024, 'sha512');
    console.log(Date.now() - start, 'password exncrypted');
})

console.log('Hello from the top-lvl code');