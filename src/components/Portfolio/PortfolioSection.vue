<script setup lang="ts">
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'
import ProjectContainer from './ProjectContainer.vue'

const { darkmodeEnabled } = useDarkMode()

const portfolioClass = computed(() => darkmodeEnabled.value ? 'portfolio dark' : 'portfolio light')
const githubIconClass = computed(() => darkmodeEnabled.value ? 'social-icon github dark' : 'social-icon github')
</script>

<template>
  <div :class="portfolioClass" id="portfolio">
    <div class="container portfolio-content">
      <h2>Portfolio</h2>
      <p>
        {{ $t('portfolio.subtext1') }}<br />
        {{ $t('portfolio.subtext2') }}
      </p>
      <p>{{ $t('portfolio.subtext3') }}</p>
      <div class="project-channels">
        <a href="https://github.com/nickname2002">
          <img :class="githubIconClass" src="/portfolio_icons/github.png" alt="GitHub" />
        </a>
        <a href="https://nickname02.itch.io">
          <img class="social-icon" src="/portfolio_icons/itch.png" alt="Itch.io" />
        </a>
      </div>
    </div>
    <ProjectContainer />
  </div>
</template>

<style scoped>
.portfolio {
  transition: background-color 0.5s ease, color 0.5s ease;
}

.portfolio.light {
  background-color: #ffffff;
  color: #000000;
}

.portfolio.dark {
  background-color: #343a40;
  color: #ffffff;
}

.portfolio-content {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.portfolio-content h2 {
  font-size: 3rem;
  font-family: 'Jost', sans-serif;
  text-align: center;
}

.portfolio-content p {
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
}

.project-channels {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
}

.social-icon {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  filter: brightness(1.1);
}

.github.dark {
  filter: invert(1);
}

@media (max-width: 768px) {
  .portfolio-content h2 {
    font-size: 2rem;
  }

  .portfolio-content p {
    font-size: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .social-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
