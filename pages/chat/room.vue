<template>
  <div>
    bruh
    <!-- <UCard class="" :ui="{ body: { padding: 'p-0 sm:p-0' } }">
      <template #header>
        <div class="flex items-center justify-between text-primary">
          <div class="flex items-center gap-x-2">
            <UIcon
              name="i-heroicons-chat-bubble-left-right"
              class="w-6 h-6 font-semibold"
            />
            <div class="text-primary font-semibold text-center text-xl">
              Nuxt Discord
            </div>
          </div>
          <div
            @click="() => navigateTo('/')"
            class="bg-primary px-3 py-1.5 text-white cursor-pointer"
          >
            Leave {{ $route.query.room }}
          </div>
        </div>
      </template>
      <div class="flex">
        <div class="bg-slate-100 py-4 px-6">
          <div class="mb-4">
            <div
              class="flex items-center gap-x-2 mb-2 px-3 py-1.5 rounded-md bg-white"
            >
              <UIcon
                name="i-heroicons-chat-bubble-bottom-center-text"
                class="w-6 h-6 font-semibold"
              />
              <div class="text-base">Room Name</div>
            </div>
            <div
              class="text-gray-500 hover:text-gray-900 mb-2 capitalize text-base ml-2"
            >
              {{ currentRoom }}
            </div>
          </div>
          <div>
            <div
              class="flex items-center gap-x-2 mb-2 px-3 py-1.5 rounded-md bg-white"
            >
              <UIcon
                name="i-heroicons-user-group"
                class="w-6 h-6 font-semibold"
              />
              <div class="text-base">Users</div>
            </div>
            <div
              v-for="(user, i) in users"
              :key="i"
              class="text-gray-500 hover:text-gray-900 mb-2 capitalize text-base ml-2"
              :class="{
                'border-b border-primary':
                  user.username === route.query.username,
              }"
            >
              {{ user.username }}
            </div>
          </div>
        </div>
        <div class="h-96 overflow-y-auto px-8 py-10 flex-1">
          <div
            class="bg-transparent w-full mb-3 flex"
            v-for="(chat, i) in chats"
            :key="i"
            :class="{
              'justify-center': chat.username === 'NuxtChatapp Admin',
              'justify-end': chat.username === route.query.username,
              'justify-start': chat.username !== route.query.username,
            }"
          >
            <div
              class="px-6 py-2 w-1/2 rounded-md mb-3"
              :class="{
                'bg-red-100': chat.username === 'NuxtChatapp Admin',
                'bg-primary/20': chat.username === route.query.username,
                'bg-green-300': chat.username !== route.query.username,
              }"
            >
              <div class="flex items-center gap-x-3">
                <div class="text-xs text-primary font-semibold">
                  {{ chat.username }}
                </div>
                <div class="text-xs">{{ chat.time }}</div>
              </div>
              <div class="mt-1 text-base">
                {{ chat.text }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <form @submit.prevent="sendMessage">
          <UInput
            v-model="message"
            placeholder="Enter your message...."
            :ui="{ padding: 'px-6 py-10' }"
          >
            <template #trailing>
              <UButton
                icon="i-heroicons-paper-airplane"
                size="xs"
                color="primary"
                variant="solid"
                :trailing="false"
                label="Send"
                class="my-3"
                type="submit"
              />
            </template>
          </UInput>
        </form>
      </template>
    </UCard> -->
  </div>
</template>

<script setup>
import Pusher from "pusher-js";

Pusher.logToConsole = true;
const runtimeConfig = useRuntimeConfig();
// Pusher.logToConsole = true;
// const runtimeConfig = useRuntimeConfig();
// console.log(runtimeConfig.PusherKey);
const pusher = new Pusher(runtimeConfig.public.PusherKey, {
  cluster: runtimeConfig.public.PusherCluster,
});
const channel = pusher.subscribe("david-movies");

onMounted(() => {
  channel.bind("discord-chat", function (data) {
    console.log({ data });
  });
  // const { username, room } = route.query as Partial<Chat>;
  // if (!username || !room) {
  //   navigateTo("/");
  // }
  // socket.value = io({
  //   path: "/api/chat/ws",
  //   transports: ["websocket", "polling"],
  // });
  // //   Join ChatRoom
  // socket.value.emit("joinRom", { username, room });
  // socket.value.on("message", (response: Chat) => {
  //   chats.value.push(response);
  // });
  // socket.value.on("roomUsers", (response: { room: string; users: User[] }) => {
  //   currentRoom.value = response.room;
  //   users.value = response.users;
  // });
});
onBeforeUnmount(() => {
  if (channel) {
    channel.unbind_all();
    channel.unsubscribe();
  }
  if (pusher) {
    pusher.disconnect();
  }
  console.log("Disconnect Publisher");
});
</script>

<style scoped></style>
