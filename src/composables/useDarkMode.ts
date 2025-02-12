import { ref, onMounted } from 'vue'

const darkmodeEnabled = ref(false);

export function useDarkMode() {
  onMounted(() => {
    const storedDarkMode = localStorage.getItem('dark-mode')
    darkmodeEnabled.value = storedDarkMode === 'true'
    if (darkmodeEnabled.value) {
      document.body.classList.add('dark-mode')
    }
  })

  function toggleDarkMode() {
    const body = document.body
    body.classList.toggle('dark-mode')

    darkmodeEnabled.value = body.classList.contains('dark-mode')
    localStorage.setItem('dark-mode', darkmodeEnabled.value.toString())
  }

  return {
    darkmodeEnabled,
    toggleDarkMode
  }
}
