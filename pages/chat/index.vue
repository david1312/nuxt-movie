<template>
  <div>
    <div class="instructions">
      <ul
        class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400"
      >
        <li>
          Chat Guidance (How to use):
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Enter your username in the field below.</li>
            <li>Enter the room name you want to create or join.</li>
            <li>
              Click "Create Room" to create a new chat room. (if room name exist
              you will automatically join)
            </li>
            <li>Click "Join Room" to join an existing chat room.</li>
            <li>
              Join the same room to chat with the to interact with other user.
            </li>
            <li>Press enter to send the chat.</li>
            <li>
              Any feedback you can send me an email here: davidbernadi@gmail.com
            </li>
          </ol>
        </li>
        <li>
          To simulate another user joining the chat:
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Open a new window in your browser.</li>
            <li>
              Navigate to the chat page and repeat the steps above with a
              different username.
            </li>
            <li>Join the same room to chat with the other user.</li>
          </ol>
        </li>
      </ul>
    </div>
    <div class="input-container">
      <input v-model="username" placeholder="Enter your username" />
      <RoomSelection :username="username" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
</script>

<style>
.instructions {
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center;
}

input {
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
