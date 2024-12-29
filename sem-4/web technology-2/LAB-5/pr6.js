const fs=require('fs');
fs.readFile("text.txt",'utf-8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let details=JSON.parse(data)
    
    for(i in details){
        if(details[i].studentspi<5){
            console.log(details[i])
        }
    }
//    console.log("student id: ",details[0])
//    console.log("student name: ",details[1])
//    console.log("student enrollmentno: ",details[2])
//    console.log("student mobileno: ",details[3])
//    console.log("student dept: ",details[4])
//    console.log("student spi: ",details[5])
});