import { Server } from "socket.io";
import { createServer } from "http";
import { joinRoom, createRoom, handleMessage } from "./services/chat-services";

export const setupWebSocketServer = () => {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected with socket ID: ${socket.id}`);

    socket.on("joinRoom", ({ room, username }) => {
      console.log(`${username} joined room: ${room}`);
      const messages = joinRoom(room, socket);
      socket.emit("previousMessages", messages);
    });

    socket.on("createRoom", ({ room, username }) => {
      console.log(`${username} created room: ${room}`);
      createRoom(room, socket);
    });

    socket.on("message", ({ room, message, username }) => {
      handleMessage(room, message, username, io);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected with socket ID: ${socket.id}`);
    });
  });

  httpServer.listen(3001, () => {
    console.log("Socket.io server listening on port 3001");
  });
};
