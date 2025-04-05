<script setup lang="ts">
import type { NavigationDestination } from '@/model/navigation.ts'
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline';

import { useI18n } from 'vue-i18n'
import { useDarkMode } from '@/composables/useDarkMode'
import { onMounted, computed } from 'vue'

const { t, locale } = useI18n()
const { darkmodeEnabled } = useDarkMode()

const sections = computed(() => [
  { name: t('navigator.home'), id: 'hero', icon: HomeIcon },
  { name: t('navigator.about'), id: 'introduction', icon: UserIcon },
  { name: t('navigator.portfolio'), id: 'portfolio', icon: BriefcaseIcon },
  { name: t('navigator.tools'), id: 'tools', icon: WrenchScrewdriverIcon },
  { name: t('navigator.contact'), id: 'contact', icon: EnvelopeIcon }
] as NavigationDestination[]);

onMounted(() => {
  const storedLanguage = localStorage.getItem('language')
  if (storedLanguage) {
    locale.value = storedLanguage
  } else {
    const browserLang = navigator.language.startsWith('nl') ? 'nl' : 'en'
    locale.value = browserLang
    localStorage.setItem('language', browserLang)
  }
})

function navigateTo(section: NavigationDestination) {
  const element = document.getElementById(section.id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}
</script>

<template>
  <div :class="['fixed-nav', darkmodeEnabled ? 'dark' : 'light']">
    <button
      v-for="(section, index) in sections"
      :key="index"
      @click="navigateTo(section)"
      :title="section.name"
    >
      <span class="icon">
        <component :is="section.icon" class="w-6 h-6" aria-hidden="true" />
      </span>
    </button>
  </div>
</template>

<style scoped>
.fixed-nav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
  z-index: 1000;
  transition: background 0.3s, border 0.3s, color 0.3s;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.fixed-nav.light {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #1f2937;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.fixed-nav.dark {
  background: rgba(31, 41, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #f3f4f6;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.fixed-nav button {
  background-color: transparent;
  border: none;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
}

.fixed-nav.light button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.fixed-nav.dark button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.fixed-nav .icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  display: flex;
}

@media (max-width: 768px) {
  .fixed-nav {
    top: auto;
    bottom: 0;
    right: 10px;
    left: 10px;
    flex-direction: row;
    justify-content: space-around;
  }

  .fixed-nav button {
    width: 40px;
    height: 40px;
  }
}
</style>
