const app = require('express')();
const http = require('http').Server(app);
// const io = require('socket.io')(http);

const io = require('socket.io')(http, {
    cors: {
      origin: 'http://localhost:8080',
      methods: ["GET", "POST"],
      credentials: true,
      transports: ['websocket', 'polling']
    },
      allowEIO3: true
  });


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   socket.on('controller', (msg) => {
      console.log('message: ' + msg);
      io.emit("server", msg);
    });

   // if user input


   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});



http.listen(3000, function() {
   console.log('listening on *:3000');
});