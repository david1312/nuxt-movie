<template>
  <div>
    <h1>Chat Room: {{ room }}</h1>
    <div v-for="(msg, index) in messages" :key="index">
      {{ msg.message }}
      <small>{{ new Date(msg.timestamp).toLocaleString() }}</small>
    </div>
    <input
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Type a message..."
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface ChatMessage {
  message: string;
  timestamp: Date;
}

const room = ref("");
const messages = ref<ChatMessage[]>([]);
const newMessage = ref("");

const { $socket } = useNuxtApp();

const route = useRoute();
room.value = route.params.room as string;

onMounted(() => {
  $socket.emit("joinRoom", room.value);

  $socket.on("previousMessages", (msgs: ChatMessage[]) => {
    messages.value = msgs;
  });

  $socket.on("message", (message: ChatMessage) => {
    messages.value.push(message);
  });
});

const sendMessage = () => {
  $socket.emit("message", { room: room.value, message: newMessage.value });
  newMessage.value = "";
};
</script>
