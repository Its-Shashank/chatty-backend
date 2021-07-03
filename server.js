const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', socket => {
  console.log('This is a socket', socket);
  console.log('Connection to socket is established');

  socket.on('chat', payload => {
    console.log(payload);
    io.emit('chat', payload)
  })
})

server.listen(5000, () => console.log('socket server is listening on 5000...'))