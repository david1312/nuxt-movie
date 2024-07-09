import { io } from "socket.io-client";

export default defineNuxtPlugin(() => {
  const socket = io("http://localhost:3001"); // Ensure this matches your server setup
  return {
    provide: {
      socket,
    },
  };
});
