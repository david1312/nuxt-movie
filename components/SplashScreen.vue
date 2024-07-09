<template>
  <div>
    <div class="splash-screen" v-if="showSplash">
      <!-- Customize your splash screen here -->
      <div v-if="showSpinner" class="spinner"></div>

      <div v-else class="checklist-icon">✔️</div>
      <h1 class="text-center">{{ loadingText }}</h1>

      <p class="image-source text-center">
        For copyright issues, image resource:
        <a
          href="https://image-3.uhdpaper.com/wallpaper/frieren-beyond-journeys-end-anime-hd-wallpaper-uhdpaper.com-176@3@a.jpg"
          target="_blank"
          >https://image-3.uhdpaper.com/wallpaper/frieren-beyond-journeys-end-anime-hd-wallpaper-uhdpaper.com-176@3@a.jpg</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const loadingText = ref("Loading...");
const showSplash = ref(true);
const showSpinner = ref(true);

onMounted(() => {
  setTimeout(() => {
    showSpinner.value = false;
    loadingText.value = "Loading Completed. Welcome to D''s Movie App 😊"; // Change the text to a smile emoticon
    setTimeout(() => {
      showSplash.value = false;
    }, 1500); // Hide the splash screen after 1 second
  }, 1500); // Initial loading duration
});
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/landscape.jpg") no-repeat center center;
  background-size: cover; /* Ensure the image covers the entire screen */
  color: #fff; /* Adjust text color */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.spinner,
.checklist-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.image-source {
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  color: #fff;
}

.image-source a {
  color: #3498db;
  text-decoration: underline;
}
</style>
