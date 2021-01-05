var express = require('express')
var path = require('path')
const socketio = require('socket.io')
const http = require('http')
var app = express()

const server = http.createServer(app)
const io = socketio(server)


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
// app.get('/chat-app',(req,res)=>{
//     res.render('index')
// })
var port =  process.env.PORT || 2000

const publicDirectoryPath = path.join(__dirname,'../public')

let count = 0
console.log("hell *****")
io.on('connection',(socket)=> {
    console.log('New WebSocket connection')
    socket.emit('countemmited',count)
    socket.on('incoming',()=>{
        count++;
        socket.emit('countemmited',count)
    })
})


app.use(express.static(publicDirectoryPath))

server.listen(port, () => {
    console.log('Server is up on port ' + port)
})


