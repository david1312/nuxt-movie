<template>
  <div>
    <input v-model="room" placeholder="Enter room name" />
    <button @click="createRoom">Create Room</button>
    <button @click="joinRoom">Join Room</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const room = ref("");
const router = useRouter();

const { $socket } = useNuxtApp();

const createRoom = () => {
  $socket.emit("createRoom", room.value);
  router.push(`/chat/${room.value}`);
};

const joinRoom = () => {
  router.push(`/chat/${room.value}`);
};
</script>
