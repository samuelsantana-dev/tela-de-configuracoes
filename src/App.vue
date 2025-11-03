<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import { useTheme } from './composables/useTheme'

const { isDark } = useTheme()
</script>

<template>
  <div :class="{ 'app-dark': isDark }">
    <Sidebar />
    <router-view />
  </div>
</template>