<template>
  <Button 
    @click="toggleTheme" 
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    :label="isDark ? ' Claro' : ' Escuro'"
    text
    rounded
    class="theme-toggle-btn"
  />
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import Button from 'primevue/button'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle-btn {
  transition: all 0.3s ease;
}
</style>