const path=require('path');
const fs = require('fs');
let drct='vivek'
let bse='index.js'


// var x = path.join(drct, bse);
// console.log(x);


// var directories = path.dirname('/Users/Refsnes/demo_path.js');
// console.log(directories);

// var filename = path.basename('/Users/Refsnes/demo_path.js');
// console.log(filename);

// fs.exists('hello.js', (exists) => {
//     console.log(exists ? 'Found' : 'Not Found!');
//   });


//read file
// const buf = new Buffer(1024);
// console.log("opening an existing file");
// fs.open("hello.js", "r+", function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
//     console.log("reading the file");
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(bytes + " bytes read");

//         // Print only read bytes to avoid junk.
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });
// });

//write file
// console.log("writing into existing file");
// fs.writeFile("hello.js", "i'm monkey d. luffy", function (err) {
//     if (err) {
//         return console.error(err);
//     }

//     console.log("Data written successfully!");
//     console.log("Let's read newly written data");

//     fs.readFile("hello.js", function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Asynchronous read: " + data.toString());
//     });
// });


//appending to a file
// let data = " i'm gonna be a king of the pirates";

// // Append data to file
// fs.appendFile(
//     "hello.js", data, "utf8",
//     // Callback function
//     function (err) {
//         if (err) throw err;

//         // If no error
//         console.log("Data is appended to file successfully.");
//     }
// );


//unlink(delete a file)
// console.log("deleting an existing file");
// fs.unlink("hello.js", function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File deleted successfully!");
// });



// Rename the file 
//getCurrentFilenames();
// fs.rename(
//     'hello.js',
//     'onepiece.js',
//     () => {
//         console.log("\nFile Renamed!\n");
//         // List all the filenames after renaming 
//         getCurrentFilenames();
//     });

// // Function to get current filenames 
// // in directory 
// function getCurrentFilenames() {
//     console.log("Current filenames:");
//     fs.readdirSync(__dirname)
//         .forEach(file => {
//             console.log(file);
//         });
// }


//create a file
// var createStream = fs.createWriteStream("h.txt");

//file state
// fs.stat("onepiece.js", (err,data) => {
//     console.log(data);
//   });

//SYNC-ASYNC
// console.log(fs.readFileSync('onepiece.js','utf-8'))
// console.log('hello');

//write sync file
console.log("writing into existing file");
fs.writeFileSync("hello.js", "i'm monkey d. luffy", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('successful')
  })

    console.log("Data written successfully!");
    console.log("Let's read newly written data");