const fs=require('fs');
fs.readFile("abc.txt","utf-8", function (err, data) {
    if (err) {
        return console.error(err);
    }
    let count=data.length
    let vowel=0
    
   for (let i = 0; i < count; i++) {
    if(data[i]=='a' || data[i]=='e' || data[i]=='i' || data[i]=='o' || data[i]=='u' ){
        vowel++;
    }
    
   }
   console.log("number of vowel is :",vowel)
    
});