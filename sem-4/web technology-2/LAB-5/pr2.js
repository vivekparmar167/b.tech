const fs=require('fs');
console.log("writing into existing file");

fs.readFile("abc.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
   
    fs.writeFile("xyz.txt",data.toString() , function (err) {
        if (err) {
            return console.error(err);
        }
    
        console.log("Data written successfully!");
       
    
       
    });
});