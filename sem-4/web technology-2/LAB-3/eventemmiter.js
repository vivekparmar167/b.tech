const eventemmiter=require('events')
 class myemmiter extends eventemmiter{
    
 }
const emit=new myemmiter();
 emit.on('hi',()=>{
    console.log('hi! how are you?')
 })
//  setInterval(()=>{
//     emit.emit('hi')
//  },1000)
let i=0
while (i<5) {
    emit.emit('hi')
    i++
}