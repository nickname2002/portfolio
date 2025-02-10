<script setup lang="ts">
import ProjectContainer from './ProjectContainer.vue'
</script>

<template>
  <div class="portfolio">
    <div class="container portfolio-content">
      <h2>Portfolio</h2>
      <p>
        {{ $t('portfolio.subtext1') }}<br />
        {{ $t('portfolio.subtext2') }}
      </p>
    </div>
    <ProjectContainer />
  </div>
</template>

<style scoped>
.portfolio-content {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.portfolio-content h2 {
  font-size: 3rem;
  font-family: 'Futura', sans-serif;
  text-align: center;
}

.portfolio-content p {
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
}
</style>
