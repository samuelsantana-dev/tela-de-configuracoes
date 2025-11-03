<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h2 class="text-3xl font-bold  mb-2">Privacidade</h2>
      <p >Gerencie suas configurações de privacidade e visibilidade</p>
    </div>

    <div class="rounded-lg shadow-sm border">
      <div class="p-6 border-b">
        <h3 class="text-xl font-semibold mb-4">Status da conta</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between py-2">
            <span >Conta</span>
            <span class="text-sm text-green-600 font-medium">Ativa</span>
          </div>
          <div class="flex items-center justify-between py-2">
            <span class=" dark:text-red-600">Ajuda</span>
            <Button label="Acessar" text class="p-button-sm" />
          </div>
        </div>
      </div>

      <div class="border-b"></div>

      <div class="p-6 border-b">
        <h3 class="text-xl font-semibold mb-4">Perfil privado</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between py-2">
            <span >Marcações e menções</span>
            <InputSwitch v-model="privacySettings.mentions" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span >Status online</span>
            <InputSwitch v-model="privacySettings.onlineStatus" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span >Perfis restritos</span>
            <InputSwitch v-model="privacySettings.restrictedProfiles" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span >Perfis bloqueados</span>
            <InputSwitch v-model="privacySettings.blockedProfiles" />
          </div>
          <div class="flex items-center justify-between py-2">
            <span >Palavras ocultas</span>
            <InputSwitch v-model="privacySettings.hiddenWords" />
          </div>
        </div>
      </div>

      <div class="border-b"></div>

      <div class="p-6">
        <h3 class="text-xl font-semibold mb-4">Outras configurações de privacidade</h3>
        <p class=" mb-4">
          Algumas configurações, como as de restrição, se aplicam ao Threads e ao Instagram, 
          e podem ser gerenciadas no Instagram.
        </p>
        <div class="flex items-center justify-between py-2">
          <span >Ocultar número de curtidas e compartilhamentos</span>
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