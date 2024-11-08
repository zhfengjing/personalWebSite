const {Server} = require('socket.io');
console.log('Sercer=,',Server);
const server = new Server({
    path:'/chat',
    serveClient:true,
    // 处理cors,解决跨域问题
  cors:{
    origin: "http://localhost:3000",//需要跨域资源共享的地址
    // allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

server.on('connection',(socket)=>{
console.log('connection',socket);
})

server.listen(3001);