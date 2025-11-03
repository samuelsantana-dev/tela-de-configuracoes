<template>
  <div class="min-h-screen flex">
    <div class="w-64  shadow-lg">
      <div class="p-6 border-b">
        <h1 class="text-2xl font-bold">Configurações</h1>
      </div>
      <nav class="p-4">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.key">
            <router-link
              :to="item.path"
              class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              :class="{
                'bg-blue-50 text-blue-600 border-r-2 border-blue-600': isActive(item.path)
              }"
            >
              <i :class="item.icon" class="mr-3"></i>
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex-1 p-8">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
  {
    key: 'profile',
    label: 'Perfil',
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
</script>