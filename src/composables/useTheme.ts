import { ref, onMounted } from 'vue'
import { usePrimeVue } from 'primevue/config'

export function useTheme() {
  const isDark = ref(false)
  const PrimeVue = usePrimeVue()

  function applyTheme(isDarkMode: boolean) {
    const html = document.documentElement
    if (isDarkMode) {
      html.classList.add('app-dark') 
      html.classList.add('dark')    
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('app-dark')
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    PrimeVue.config.theme.options.darkMode = isDarkMode
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialTheme = saved === 'dark' || (!saved && prefersDark)
    isDark.value = initialTheme
    applyTheme(initialTheme)
  })

  return {
    isDark,
    toggleTheme
  }
}