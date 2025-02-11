<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faUsers, faList, faClock, faWrench, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { ref } from 'vue'

const props = defineProps<{
  iconUrl: string
  name: string
  description: string
  type: string
  collaborators: string
  status: string
  devPeriod: string
  tools: string
  youtubeUrl?: string
  githubUrl?: string
  itchUrl?: string
}>()

const viewProjectDescription = ref(false);

function toggleProjectDescription() {
  viewProjectDescription.value = !viewProjectDescription.value;
}
</script>

<template>
  <div
    class="project-container"
    @click="toggleProjectDescription">
    <!-- Project Content -->
    <div class="project-content">
      <div class="initial-view">
        <!-- Icon -->
        <div class="project-icon-container">
          <img :src="props.iconUrl" :alt="props.name" />
        </div>

        <!-- Dividing line vertically -->
        <div class="divider"></div>

        <!-- Metadata -->
        <div class="project-metadata-container">
          <p class="project-name"><strong>{{ props.name }}</strong></p>
          <p class="project-type"><font-awesome-icon class="icon" :icon="faPlus" /> {{ props.type }}</p>
          <p class="project-collaborators"><font-awesome-icon class="icon" :icon="faUsers" /> {{ props.collaborators }}</p>
          <p class="project-status"><font-awesome-icon class="icon" :icon="faList" /> {{ props.status }}</p>
          <p class="project-dev-period"><font-awesome-icon class="icon" :icon="faClock" /> {{ props.devPeriod }}</p>
          <p class="project-tools"><font-awesome-icon class="icon" :icon="faWrench" /> {{ props.tools }}</p>
        </div>
      </div>

      <!-- Arrow icon on hover to indicate that the user can click on the project -->
      <font-awesome-icon
        class="chevron"
        :icon="faChevronDown"
        :class="{ rotate: viewProjectDescription }"
        style="font-size: 1.25rem; color: #333;"
      />

      <!-- Project Description -->
      <transition name="slide-fade">
        <div v-if="viewProjectDescription" class="project-description">
          <p>{{ props.description }}</p>
          <div class="sources">
            <a v-if="props.youtubeUrl" :href="props.youtubeUrl">
              <img src="/project_icons/source_icons/youtube.png" alt="YouTube" />
            </a>
            <a v-if="props.githubUrl" :href="props.githubUrl">
              <img src="/project_icons/source_icons/github.png" alt="GitHub" />
            </a>
            <a v-if="props.itchUrl" :href="props.itchUrl">
              <img src="/project_icons/source_icons/itch.png" alt="Itch.io" />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  padding: 4rem;
  background-color: white;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-content {
  font-family: 'Nunito Sans', sans-serif;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
  width: 100%;
  border-radius: 5px;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.2s;
}

.project-content:hover {
  transform: scale(1.02);
}

.project-icon-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.project-icon-container img {
  width: 200px;
  height: 200px;
  margin-left: 2rem;
}

.divider {
  height: 100%;
  width: 5px;
  background-color: #333;
}

.project-metadata-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.project-metadata-container p {
  font-size: 1.1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-name {
  font-size: 1.3rem;
}

.project-type,
.project-collaborators,
.project-status,
.project-dev-period,
.project-tools {
  font-size: 1.1rem;
}

.icon {
  font-size: 0.9rem;
}

.initial-view {
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.project-description {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: max-height 0.5s ease-in-out, opacity 0.4s ease-in-out;
  overflow: hidden;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-fade-enter-to, .slide-fade-leave-from {
  max-height: 300px;
  opacity: 1;
}

.project-description {
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.4s ease-in-out;
  text-align: left;
  padding: 1rem;
}

.chevron {
  transition: transform 0.3s ease-in-out;
}

.chevron.rotate {
  transform: rotate(180deg);
}

.sources {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.sources img {
  width: 25px;
  height: 25px;
  margin-top: 1rem;
  transition: transform 0.3s ease, filter 0.3s ease;
  opacity: 0.7;
}

.sources img:hover {
  transform: scale(1.15);
  opacity: 1;
}
</style>
