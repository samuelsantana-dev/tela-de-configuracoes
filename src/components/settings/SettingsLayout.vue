<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <!-- Overlay para Mobile -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
      @click="isMobileMenuOpen = false"
    ></div>

    <!-- Sidebar -->
    <div 
      class="w-64  dark:bg-gray-800 shadow-lg fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out"
      :class="{
        '-translate-x-full': !isMobileMenuOpen,
        'translate-x-0': isMobileMenuOpen
      }"
    >
      <!-- Header do Sidebar -->
      <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Configurações</h1>
        
        <!-- Botão Fechar (Mobile) -->
        <button 
          @click="isMobileMenuOpen = false"
          class="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <i class="pi pi-times text-lg"></i>
        </button>
      </div>

      <!-- Menu -->
      <nav class="p-4">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.key">
            <router-link
              :to="item.path"
              class="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              :class="{
                'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600': isActive(item.path)
              }"
              @click="isMobileMenuOpen = false"
            >
              <i :class="item.icon" class="mr-3"></i>
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Conteúdo Principal -->
    <div class="flex-1 lg:ml-0">
      <!-- Header Mobile -->
      <header class="lg:hidden  dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 p-4">
        <div class="flex items-center justify-between">
          <button 
            @click="isMobileMenuOpen = true"
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2"
          >
            <i class="pi pi-bars text-xl"></i>
          </button>
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Configurações</h1>
          <div class="w-10"></div> <!-- Espaçador para centralizar -->
        </div>
      </header>

      <!-- Conteúdo -->
      <main class="p-4 lg:p-8">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobileMenuOpen = ref(false);

const menuItems = [
  {
    key: 'profile',
    label: 'Meu Perfil',
    path: '/settings/profile',
    icon: 'pi pi-user'
  },
  {
    key: 'security',
    label: 'Segurança',
    path: '/settings/security', 
    icon: 'pi pi-shield'
  },
  {
    key: 'notifications',
    label: 'Notificações',
    path: '/settings/notifications',
    icon: 'pi pi-bell'
  },
  {
    key: 'privacy',
    label: 'Privacidade',
    path: '/settings/privacy',
    icon: 'pi pi-lock'
  },
  {
    key: 'billing',
    label: 'Cobrança',
    path: '/settings/billing',
    icon: 'pi pi-credit-card'
  },
  {
    key: 'integrations',
    label: 'Integrações',
    path: '/settings/integrations',
    icon: 'pi pi-cog'
  }
];

const isActive = (path: string) => {
  return route.path === path;
};

// Fechar menu ao redimensionar para desktop
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMobileMenuOpen.value = false;
  }
};

// Fechar menu com ESC
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Transições suaves */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>