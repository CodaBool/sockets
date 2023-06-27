import { Server } from "socket.io"
const io = new Server(3000, {
  cors: { origin: "*" }
})

io.on("connection", (socket) => {
  console.log('slap connection,', socket.id)
  socket.emit("hi", 1, "2", { 3: Buffer.from([4]) });
  socket.on("hi", (...args) => {
    console.log("SLAP: got hi from client")
  })
})