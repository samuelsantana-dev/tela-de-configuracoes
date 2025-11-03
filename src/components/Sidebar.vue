<script setup lang="ts">
import LogoutDialog from '../components/settings/LogoutDialog.vue'

</script>


<template>
  <nav class="p-4 flex gap-4">
    <router-link to="/">Home</router-link> |
    <router-link to="/vueQuery">VueQuery</router-link> |
    <router-link to="/settings">Settings</router-link> |
    <LogoutDialog />
    <Toast position="top-right" />
  </nav>
</template>

<style scoped>
/* nav {
  padding: 10px;
  background-color: #eee;
  margin-bottom: 20px;
} */
</style>

