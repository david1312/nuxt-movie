import { Server, type ServerOptions, type Socket } from "socket.io";
import moment from "moment";
import type { H3Event } from "h3";
import type { User } from "../model/chat";
import { userJoin, getRoomUsers, userLeave, getCurrentUser } from "./user";

const options: Partial<ServerOptions> = {
  path: "/api/chat/ws",
  serveClient: false,
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
};

export const io = new Server(options);

const botName = "D'Movies Bot";

export function initSocket(event: H3Event) {
  // @ts-ignore
  if (!event.node.res.socket?.server.io) {
    // @ts-ignore
    io.attach(event.node.res.socket?.server);
    // @ts-ignore
    event.node.res.socket.server.io = io;

    io.on("connection", (socket: Socket) => {
      // Join Room
      socket.on("joinRom", (payload: User) => {
        const user = userJoin({ ...payload, id: socket.id });
        socket.join(user.room);

        socket.broadcast
          .to(user.room)
          .emit(
            "message",
            formnatMessage(botName, `${user.username} has joined the chat`)
          );

        io.to(user.room).emit("roomUsers", {
          room: user.room,
          users: getRoomUsers(user.room),
        });
      });

      // Handle Chat Message
      socket.on("chatMessage", (payload: string) => {
        const user = getCurrentUser(socket.id);
        if (user) {
          io.to(user.room).emit(
            "message",
            formnatMessage(user.username, payload)
          );
        }
      });

      // Disconnect
      socket.on("disconnect", () => {
        const user = userLeave(socket.id);
        if (user) {
          io.to(user.room).emit(
            "message",
            formnatMessage(botName, `${user.username} has left the chat`)
          );

          io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room),
          });
        }
      });
    });
  }
}

export function formnatMessage(username: string, text: string) {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}
