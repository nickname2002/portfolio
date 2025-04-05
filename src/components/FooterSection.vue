<script setup lang="ts">
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { darkmodeEnabled } = useDarkMode()

const footerClass = computed(() => darkmodeEnabled.value ? 'footer dark' : 'footer light')
const socialIconClass = computed(() => darkmodeEnabled.value ? 'social-icon dark' : 'social-icon')
</script>

<template>
  <footer :class="footerClass" class="py-4" id="contact">
    <div class="container text-center">
      <div class="contact-section">
        <h2>{{ $t('contact.title') }}</h2>
        <p>{{ $t('contact.subtitle') }}</p>
        <a href="https://www.linkedin.com/in/nick-jordan-11247bba/">
          <img :class="socialIconClass" src="/social_icons/linkedin.png" />
        </a>
      </div>
      <p class="mb-1 copyright">&copy; 2025 Nick Jordan</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.footer.light {
  background-color: rgba(245, 245, 245);
  color: black;
}

.footer.dark {
  background-color: #1f2226;
  color: white;
}

.social-icon.dark {
  filter: grayscale(100%) invert(1.0) brightness(1.5);
}

.contact-section {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid rgba(220, 220, 220);
  margin-bottom: 40px;
}

.contact-section h2 {
  font-size: 2rem;
  font-family: 'Jost', sans-serif;
}

.contact-section p {
  font-size: 1.25rem;
  font-family: 'Nunito Sans', sans-serif;
  padding-bottom: 20px;
}

.social-icon {
  width: 50px;
  height: 50px;
  filter: grayscale(100%);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  filter: grayscale(0%);
}

.copyright {
  font-family: 'Jost', sans-serif;
  padding-top: 10px;
  padding-bottom: 100px !important;
}

@media (max-width: 768px) {
  .contact-section h2 {
    font-size: 1.75rem;
  }

  .contact-section p {
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
