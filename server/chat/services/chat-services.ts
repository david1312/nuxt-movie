import { ChatMessage, Rooms } from "../interfaces/chat-interfaces";

const rooms: Rooms = {};

export const joinRoom = (room: string, socket: any) => {
  socket.join(room);
  if (!rooms[room]) {
    rooms[room] = [];
  }
  return rooms[room];
};

export const createRoom = (room: string, socket: any) => {
  socket.join(room);
  if (!rooms[room]) {
    rooms[room] = [];
  }
};

export const handleMessage = (
  room: string,
  message: string,
  username: string,
  io: any
) => {
  const chatMessage: ChatMessage = { message, username, timestamp: new Date() };
  rooms[room].push(chatMessage);
  io.to(room).emit("message", chatMessage);
};
