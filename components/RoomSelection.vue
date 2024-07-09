<template>
  <div class="input-container">
    <input v-model="room" placeholder="Enter room name" />
    <button @click="createRoom" :disabled="!canInteract">Create Room</button>
    <button @click="joinRoom" :disabled="!canInteract">Join Room</button>
  </div>
</template>

<script setup lang="ts">
import { usernameChat } from "~/store/useItem";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const userChat = usernameChat();

const room = ref("");
const router = useRouter();

const { $socket } = useNuxtApp();
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});

const canInteract = computed(
  () => props.username.length > 0 && room.value.length > 0
);

const createRoom = () => {
  if (canInteract.value) {
    $socket.emit("createRoom", { room: room.value, username: props.username });
    userChat.value = props.username;
    router.push(`/chat/${room.value}`);
  }
};

const joinRoom = () => {
  if (canInteract.value) {
    $socket.emit("joinRoom", { room: room.value, username: props.username });
    userChat.value = props.username;
    router.push(`/chat/${room.value}`);
  }
};
</script>

<style>
button {
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
