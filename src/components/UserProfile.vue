<template>
  <div class="min-h-screen py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="mb-8">
        <h1 class="text-3xl font-bold  ">Meu Perfil</h1>
        <p class="  mt-2">Gerencie suas informações pessoais</p>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span class="ml-3  ">Carregando...</span>
      </div>
                                                                       
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="rounded-xl shadow-sm border   p-6">
            <div class="flex items-center space-x-6 mb-6">
              <div class="relative">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span class="text-white text-2xl font-bold">
                    {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
                  </span>
                </div>
                <div class="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
              </div>
              
              <div>
                <h2 class="text-2xl font-bold  ">{{ user?.name }}</h2>
                <p class="  mt-1">{{ user?.email }}</p>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '../composables/useUser'

const { data: user, isLoading} = useUser()

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>