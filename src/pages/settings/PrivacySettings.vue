<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Privacidade</h2>
      <p class="text-gray-600">Gerencie suas configurações de privacidade e visibilidade</p>
    </div>

    <div class="bg-white rounded-lg shadow-sm border">
      <div class="p-6 border-b">
        <h3 class="text-xl font-semibold mb-4">Status da conta</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Conta</span>
            <span class="text-sm text-green-600 font-medium">Ativa</span>
          </div>
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Ajuda</span>
            <Button label="Acessar" text class="p-button-sm" />
          </div>
        </div>
      </div>

      <div class="border-b"></div>

      <div class="p-6 border-b">
        <h3 class="text-xl font-semibold mb-4">Perfil privado</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Marcações e menções</span>
            <InputSwitch v-model="privacySettings.mentions" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Status online</span>
            <InputSwitch v-model="privacySettings.onlineStatus" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Perfis restritos</span>
            <InputSwitch v-model="privacySettings.restrictedProfiles" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Perfis bloqueados</span>
            <InputSwitch v-model="privacySettings.blockedProfiles" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Palavras ocultas</span>
            <InputSwitch v-model="privacySettings.hiddenWords" />
          </div>
        </div>
      </div>

      <div class="border-b"></div>

      <div class="p-6">
        <h3 class="text-xl font-semibold mb-4">Outras configurações de privacidade</h3>
        <p class="text-gray-600 mb-4">
          Algumas configurações, como as de restrição, se aplicam ao Threads e ao Instagram, 
          e podem ser gerenciadas no Instagram.
        </p>
        <div class="flex items-center justify-between py-2">
          <span class="text-gray-700">Ocultar número de curtidas e compartilhamentos</span>
          <InputSwitch v-model="privacySettings.hideLikesShares" />
        </div>
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <Button label="Salvar Configurações" icon="pi pi-check" class="p-button-primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';

const privacySettings = ref({
  mentions: true,
  onlineStatus: false,
  restrictedProfiles: false,
  blockedProfiles: true,
  hiddenWords: true,
  hideLikesShares: true
});
</script>