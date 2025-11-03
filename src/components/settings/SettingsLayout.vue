<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <div class="md:hidden flex items-center justify-between p-4 shadow">
      <h1 class="text-xl font-bold">Configurações</h1>
      <button @click="toggleMenu" class="text-2xl focus:outline-none">
        <i class="pi pi-bars"></i>
      </button>
    </div>

    <transition name="slide">
      <div
        v-if="menuOpen || isDesktop"
        class="w-64 bg-white shadow-lg z-20 fixed md:static h-full md:h-auto top-0 left-0 md:flex md:flex-col"
      >
        <div class="p-6 border-b hidden md:block">
          <h1 class="text-2xl font-bold">Configurações</h1>
        </div>

        <nav class="p-4 overflow-y-auto md:overflow-visible">
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.key">
              <router-link
                :to="item.path"
                class="flex items-center px-4 py-3 rounded-lg transition-colors"
                :class="{
                  'bg-blue-50 text-blue-600 border-r-2 border-blue-600': isActive(item.path),
                  'hover:bg-blue-50 hover:text-blue-600': !isActive(item.path)
                }"
                @click="closeMenuOnMobile"
              >
                <i :class="item.icon" class="mr-3"></i>
                <span>{{ item.label }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>

    <div class="flex-1 p-4 md:p-8 mt-14 md:mt-0">
      <router-view />
    </div>

    <div
      v-if="menuOpen && !isDesktop"
      class="fixed inset-0 bg-black bg-opacity-40 z-10"
      @click="menuOpen = false"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const isDesktop = ref(window.innerWidth >= 768)

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768
  if (isDesktop.value) menuOpen.value = false
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenuOnMobile = () => {
  if (!isDesktop.value) menuOpen.value = false
}

const menuItems = [
  { key: 'profile', label: 'Meu Perfil', path: '/settings/profile', icon: 'pi pi-user' },
  { key: 'security', label: 'Segurança', path: '/settings/security', icon: 'pi pi-shield' },
  { key: 'notifications', label: 'Notificações', path: '/settings/notifications', icon: 'pi pi-bell' },
  { key: 'privacy', label: 'Privacidade', path: '/settings/privacy', icon: 'pi pi-lock' },
  { key: 'billing', label: 'Cobrança', path: '/settings/billing', icon: 'pi pi-credit-card' },
  { key: 'integrations', label: 'Integrações', path: '/settings/integrations', icon: 'pi pi-cog' }
]

const isActive = (path: string) => route.path === path
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
