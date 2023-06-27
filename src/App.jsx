import React, { useEffect } from 'react'
import { io } from "socket.io-client"

export default function Main() {
  useEffect(() => {
    const socket = io("ws://localhost:3000")

    // send a message to the server
    socket.emit("hi", 5, "6", { 7: Uint8Array.from([8]) })
    
    // receive a message from the server
    socket.on("hi", (...args) => {
      console.log("got hello from server")
    })
  }, [])
  
  return (
    <h1 style={{margin: '100px', fontSize: '2em'}}>App1</h1>
  )
}