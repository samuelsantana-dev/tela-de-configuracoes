<template>
  <Button 
    @click="toggleTheme" 
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    :label="isDark ? ' Claro' : ' Escuro'"
    text
    rounded
  />
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import Button from 'primevue/button'

const { isDark, toggleTheme } = useTheme()
</script>