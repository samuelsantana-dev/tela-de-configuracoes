<script setup lang="ts">
import LogoutDialog from '../components/settings/LogoutDialog.vue'

import Button from 'primevue/button';

</script>


<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/settings">Settings</router-link> |
    <router-link to="/qualquer-coisa">NotFound</router-link> |
    <Button label="TESTE" />
<Button label="Warn" severity="warn" />
<Button label="Success" severity="success" />
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

