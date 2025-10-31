<template>
  <Button icon="pi pi-sun" @click="toggleTheme" />
</template>

<script setup lang="ts">
import { usePrimeVue } from 'primevue/config';
const primevue = usePrimeVue();

function toggleTheme(){
    const currentTheme = localStorage.getItem('theme') || 'lara-light-blue';
    const nextTheme = currentTheme.includes('light') ? 'lara-dark-blue' : 'lara-light-blue';
    import(`primevue/resources/themes/${nextTheme}/theme.css`);
    localStorage.setItem('theme', nextTheme);
}

</script>

