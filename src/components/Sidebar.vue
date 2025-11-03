<script setup lang="ts">
import LogoutDialog from '../components/settings/LogoutDialog.vue'
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <!-- Logo -->
        <div class="flex-shrink-0">
          <h1 class="text-xl font-bold text-gray-800 dark:text-white">
            MeuApp
          </h1>
        </div>

        <!-- Navegação Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-3 py-2 rounded-md"
            active-class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          >
            Home
          </router-link>
          <router-link 
            to="/vueQuery" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-3 py-2 rounded-md"
            active-class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          >
            VueQuery
          </router-link>
          <router-link 
            to="/settings" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-3 py-2 rounded-md"
            active-class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          >
            Settings
          </router-link>
        </div>

        <!-- Navegação Mobile com Ícones -->
        <div class="md:hidden flex items-center space-x-1">
          <router-link 
            to="/" 
            class="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            active-class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          >
            <i class="pi pi-home text-lg"></i>
          </router-link>
          
          <router-link 
            to="/vueQuery" 
            class="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            active-class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          >
            <i class="pi pi-database text-lg"></i>
          </router-link>
          
          <router-link 
            to="/settings" 
            class="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            active-class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          >
            <i class="pi pi-cog text-lg"></i>
          </router-link>
        </div>

        <!-- Controles -->
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <LogoutDialog />
        </div>
      </div>
    </div>
    <Toast position="top-right" />
  </nav>
</template>