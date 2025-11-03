<template>
  <div>
    <div v-if="isLoading">Carregando...</div>
    <div v-else-if="error">Erro: {{ error.message }}</div>
    <div v-else>
      <h3>{{ user?.name }}</h3>
      <p>{{ user?.email }}</p>
      
    </div>

  </div>
</template>

<script setup lang="ts">
import { useUser } from '../composables/useUser'

const { data: user, isLoading, error } = useUser()
</script>