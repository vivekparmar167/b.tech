const fs=require('fs');
let name='vivek'
let enroll='216020307163';
let arr=`vivek,216020307163
vivek,216020307163`


fs.writeFile("text.txt", arr.toString(), function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    
});
