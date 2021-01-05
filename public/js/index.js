const socket = io()
 
var t=0;
socket.on('countemmited',(count)=>{
    console.log("value of count is " + count)
    t = count;
})

const  increase = document.querySelector('#button')

increase.addEventListener('click',()=>{
    console.log('clicked')
    socket.emit('incoming')
})