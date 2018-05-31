const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip()


// const readable = fs.createReadStream('./big.img.jpg');
// const compressed = fs.createWriteStream('./big.img.jpg.zip');

// readable.pipe(gzip).pipe(compressed);

// console.log("file is compressed");



const compressedReader = fs.createReadStream('./big.img.jpg.zip');
const uncompressed = fs.createWriteStream('./big.img.uncompressed.jpg');
compressedReader.pipe(gunzip).pipe(uncompressed);

console.log("file is uncompressed");




