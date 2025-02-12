<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'

const { locale } = useI18n()

const isClicked = ref(false)

onMounted(() => {
  const storedLanguage = localStorage.getItem('language')
  if (storedLanguage) {
    locale.value = storedLanguage
  } else {
    const browserLang = navigator.language.startsWith('nl') ? 'nl' : 'en'
    locale.value = browserLang
    localStorage.setItem('language', browserLang)
  }
});

const chosenLanguage = computed(() => locale.value)
const langIcon = computed(() => (chosenLanguage.value === 'nl' ? '🇳🇱' : '🇬🇧'))

function toggleLanguage() {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
    locale.value = chosenLanguage.value === 'nl' ? 'en' : 'nl'
    localStorage.setItem('language', locale.value)
  }, 150)
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light px-3">
    <div class="container container-fluid">
      <!-- Site title -->
      <div class="site-title">
        <img class="portrait" src="../assets/portrait.jpg" alt="portrait" />
        <span class="navbar-brand">Nick Jordan</span>
      </div>

      <!-- Settings -->
      <div class="settings">
        <button
          class="btn lang-button"
          @click="toggleLanguage"
          :class="{ clicked: isClicked }">
          <span class="lang">{{ langIcon }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 75px;
}

.site-title {
  display: flex;
  align-items: center;
}

.navbar-brand {
  color: black;
  text-decoration: none;
  font-family: 'Jost', sans-serif;
}

.portrait {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.lang-button {
  transition: transform 0.15s ease-in-out;
}

.lang-button:hover {
  transform: scale(1.2);
}

.lang-button.clicked {
  transform: scale(0.9);
}

.lang {
  font-size: 1.75rem;
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .site-title {
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  .portrait {
    width: 50px;
    height: 50px;
  }

  .navbar-brand {
    font-size: 1.5rem;
  }

  .lang {
    font-size: 2rem;
  }
}
</style>
