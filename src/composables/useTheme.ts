import { ref, onMounted } from 'vue'
import { usePrimeVue } from 'primevue/config'

export function useTheme() {
  const isDark = ref(false)
  const PrimeVue = usePrimeVue()

  function applyTheme(isDarkMode: boolean) {
    const html = document.documentElement
    if (isDarkMode) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    PrimeVue.config.theme.options.darkMode = isDarkMode
    console.log('🎨 Tema aplicado:', isDarkMode ? 'dark' : 'light')
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme') === 'dark'
    isDark.value = saved
    applyTheme(saved)
  })

  return {
    isDark,
    toggleTheme
  }
}
