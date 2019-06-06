const fs = require('fs');
const zlib=require("zlib");

// var str = "";
// for (var i = 0; i <= 99999; i++) {
//     str += "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// }

// fs.writeFile('./big.txt', str, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

// fs.readFile('./big.txt', str, (err,data)=>{
//     if (err) throw err;
//     var x=data;
//     console.log("completed Async");
// });
console.log("teste");

var readble = fs.createReadStream('big.txt');
var writable= fs.createWriteStream('big_copy.txt');

readble.on('data', function (chunk) {
    writable.write(chunk);
});


var readble = fs.createReadStream('big.txt');

readble.on('end', function (chunk) {
    console.log("completed stream");
    writable.end();
});

readble.pipe(writable);

var gzip=zlib.createGzip();
var compressed= fs.createWriteStream('big_copy.txt.gz');

readble.pipe(gzip).pipe(compressed);