import { Server } from "socket.io";
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "net";

interface ChatMessage {
  message: string;
  timestamp: Date;
}

interface Rooms {
  [key: string]: ChatMessage[];
}

const rooms: Rooms = {};

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("joinRoom", (room: string) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);

    if (!rooms[room]) {
      rooms[room] = [];
    }

    socket.emit("previousMessages", rooms[room]);
  });

  socket.on("createRoom", (room: string) => {
    socket.join(room);
    console.log(`Room created: ${room}`);
    if (!rooms[room]) {
      rooms[room] = [];
    }
  });

  socket.on(
    "message",
    ({ room, message }: { room: string; message: string }) => {
      const chatMessage: ChatMessage = { message, timestamp: new Date() };
      rooms[room].push(chatMessage);
      io.to(room).emit("message", chatMessage);
    }
  );

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

export default function (
  req: IncomingMessage,
  res: ServerResponse & { socket: Socket & { server: any } }
) {
  if (res.socket && !res.socket.server.io) {
    console.log("Starting socket.io server...");
    io.attach(res.socket.server);
    res.socket.server.io = io;
  }
  res.end();
}
