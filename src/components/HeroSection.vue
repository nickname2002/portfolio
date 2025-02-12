<script setup lang="ts">
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { darkmodeEnabled } = useDarkMode()

const heroClass = computed(() => darkmodeEnabled.value ? 'hero dark' : 'hero light')
</script>

<template>
  <div :class="heroClass">
    <div class="hero-content">
      <h1>Nick Jordan</h1>
      <h3>Software Engineer & Game Developer</h3>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('/backdrops/hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Jost', sans-serif;
  font-size: 2rem;
  text-align: center;
  background-attachment: fixed;
  min-height: calc(100vh - 75px);
  transition: background-color 0.5s ease;
  position: relative;
  z-index: 0;
}

.hero.dark::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.5);
  z-index: -1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-content h1 {
  font-size: 400%;
}

.hero-content h3 {
  font-family: 'Nunito Sans', sans-serif;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 250%;
    padding-bottom: 20px;
  }

  .hero-content h3 {
    font-size: 1.5rem;
  }
}
</style>
