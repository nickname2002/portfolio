<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useDarkMode } from '@/composables/useDarkMode'

const { locale } = useI18n()
const { darkmodeEnabled, toggleDarkMode } = useDarkMode()

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
})

const chosenLanguage = computed(() => locale.value)
const langIconClass = computed(() => chosenLanguage.value === 'nl'
  ? 'fi fi-nl'
  : 'fi fi-gb');
const navbarClass = computed(() => darkmodeEnabled.value
  ? 'navbar navbar-dark'
  : 'navbar navbar-light')
const iconColor = computed(() => darkmodeEnabled.value ? 'white' : '#343a40')

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
  <nav :class="navbarClass" class="navbar-expand-lg px-3" id="hero">
    <div class="container container-fluid">
      <!-- Site title -->
      <div class="site-title">
        <img class="portrait" src="../assets/portrait.jpg" alt="portrait" />
        <span class="navbar-brand">Nick Jordan</span>
      </div>

      <!-- Settings -->
      <div class="settings">
        <!-- Dark mode -->
        <button class="btn" @click="toggleDarkMode">
          <font-awesome-icon :style="{ color: iconColor }" v-if="!darkmodeEnabled" class="color-theme" :icon="faSun" />
          <font-awesome-icon :style="{ color: iconColor }" v-else class="color-theme" :icon="faMoon" />
        </button>

        <!-- Language -->
        <button
          class="btn lang-button"
          @click="toggleLanguage"
          :class="{ clicked: isClicked }">
          <span
            class="lang"
            :class="langIconClass"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
body {
  transition: background-color 0.5s ease, color 0.5s ease;
}

.navbar {
  min-height: 75px;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.navbar-light {
  background-color: #f8f9fa;
  color: black;
}

.navbar-dark {
  background-color: #343a40;
  color: white;
}

.site-title {
  display: flex;
  align-items: center;
}

.navbar-brand {
  color: inherit;
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
  margin-top: 0.2rem;
  font-size: 1.5rem;
}

.color-theme {
  margin-right: 1rem;
  font-size: 1.5rem;
  transition: transform 0.15s ease-in-out;
  display: flex;
}

.color-theme:hover {
  transform: scale(1.2);
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
    font-size: 1.75rem;
  }
}
</style>
