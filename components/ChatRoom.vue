<template>
  <div>
    <div class="chat-header">
      <span class="username">Logged in as: {{ username }}</span>
    </div>
    <div v-for="(msg, index) in messages" :key="index">
      <strong>{{ msg.username }}:</strong> {{ msg.message }}
      <small>{{ new Date(msg.timestamp).toLocaleString() }}</small>
    </div>
    <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <input
        class="min-w-[360px]"
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

interface ChatMessage {
  message: string;
  username: string;
  timestamp: Date;
}

const props = defineProps({
  room: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const messages = ref<ChatMessage[]>([]);
const newMessage = ref("");

const { $socket } = useNuxtApp();

const handlePreviousMessages = (msgs: ChatMessage[]) => {
  messages.value = msgs;
};

const handleMessage = (message: ChatMessage) => {
  messages.value.push(message);
};

onMounted(() => {
  $socket.emit("joinRoom", { room: props.room, username: props.username });
  $socket.on("previousMessages", handlePreviousMessages);
  $socket.on("message", handleMessage);
});

onBeforeUnmount(() => {
  $socket.off("previousMessages", handlePreviousMessages);
  $socket.off("message", handleMessage);
});

const sendMessage = () => {
  $socket.emit("message", {
    room: props.room,
    message: newMessage.value,
    username: props.username,
  });
  newMessage.value = "";
};
</script>

<style scoped>
.chat-header {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.username {
  font-weight: bold;
}
</style>
