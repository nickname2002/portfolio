<template>
  <div :class="mottoClass">
    <div class="container motto-content">
      <h2>“To infinity, and beyond!”</h2>
      <p>— Buzz Lightyear</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { darkmodeEnabled } = useDarkMode()

const mottoClass = computed(() => darkmodeEnabled.value ? 'motto dark' : 'motto light')
</script>

<style scoped>
.motto {
  background-image: url('/backdrops/motto.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  transition: background-color 0.5s ease;
  z-index: 0;
}

.motto.dark::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.motto-content {
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.motto-content h2 {
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
}

.motto-content p {
  font-size: 1.5rem;
  font-family: 'Nunito Sans', sans-serif;
}

@media (max-width: 768px) {
  .motto-content h2 {
    margin-left: 2rem;
  }

  .motto-content p {
    font-size: 1.25rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
