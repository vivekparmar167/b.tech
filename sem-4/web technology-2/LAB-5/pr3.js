const fs=require('fs');
fs.readFile("abc.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    let count=data.length
   
    console.log("number of word is: ",count)
});