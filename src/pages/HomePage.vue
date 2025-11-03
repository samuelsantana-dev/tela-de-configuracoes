<template>
  <div class="min-h-screen py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
          Bem-vindo ao MeuApp
        </h1>
        <p class="text-lg">
          Uma aplicação moderna desenvolvida com Vue 3 e TypeScript
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="  rounded-lg shadow-sm border   p-6 hover:shadow-md transition-shadow cursor-pointer"
          @click="$router.push('/settings')">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <i class="pi pi-cog text-blue-600 dark:text-blue-400 text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold   mb-1">
                Configurações
              </h3>
              <p class=" dark:text-gray-400">
                Gerencie seu perfil e preferências
              </p>
            </div>
          </div>
        </div>

        <div class="  rounded-lg shadow-sm border   p-6 hover:shadow-md transition-shadow cursor-pointer"
          @click="$router.push('/vueQuery')">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <i class="pi pi-database text-green-600 dark:text-green-400 text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold   mb-1">
                VueQuery
              </h3>
              <p>
                Explore dados e consultas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg p-6">
        <h2 class="text-2xl font-semibold   mb-4">
          Sobre o Projeto
        </h2>
        <div class="space-y-3">
          <p>✅ Desenvolvido com Vue 3 e Composition API</p>
          <p>✅ TypeScript para type safety</p>
          <p>✅ PrimeVue para componentes UI</p>
          <p>✅ Tema claro/escuro integrado</p>
          <p>✅ Totalmente responsivo</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>