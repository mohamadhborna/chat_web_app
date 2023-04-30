const express = require('express');
const socketio = require('socket.io')
const http = require('http')

const app = express(); //Request Handler valid createserver
const server = http.createServer(app)
const io = new socketio.Server(server)

//* static folder
app.use(express.static('public'))


const port = process.env.PORT || 4200

server.listen(port , () =>{
    console.log(`server is running on port ${port}`)
})

//* server listening and socket set up ==> we need event sender and event listener
io.on('connection' , (socket) =>{
    console.log('Client connected ' + socket.id)

    //* socket listening
    socket.on('disconnect' , () =>{
        console.log('Client disconnected ' + socket.id)
    })

})



// app.listen(port , () =>{
//     console.log(`server is Running on port ${port}`)
// })