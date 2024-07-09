<template>
  <div>
    <h1>Chat Room: {{ room }}</h1>
    <ChatRoom :room="room" :username="username" />
  </div>
</template>

<script setup>
import { usernameChat } from "~/store/useItem";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ChatRoom from "~/components/ChatRoom.vue";

const route = useRoute();
const router = useRouter();
const room = ref(route.params.room);
const username = usernameChat();

onMounted(() => {
  if (!username.value) {
    // Redirect to the chat index page if username is not set
    router.push("/chat");
  }
});
</script>
