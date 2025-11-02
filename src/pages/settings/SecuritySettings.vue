<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Segurança</h2>
      <p class="text-gray-600">Gerencie sua senha e configurações de segurança</p>
    </div>

    <div class="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h3 class="text-xl font-semibold mb-4">Alterar Senha</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Senha Atual</label>
          <Password v-model="currentPassword" :feedback="false" toggleMask class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Nova Senha</label>
          <Password v-model="newPassword" toggleMask class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Confirmar Nova Senha</label>
          <Password v-model="confirmPassword" :feedback="false" toggleMask class="w-full" />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold mb-4">Autenticação de Dois Fatores</h3>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-700">Proteja sua conta com autenticação de dois fatores</p>
          <p class="text-sm text-gray-500">Recomendado para maior segurança</p>
        </div>
        <InputSwitch v-model="twoFactorEnabled" />
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <Button label="Atualizar Segurança" icon="pi pi-shield" class="p-button-primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Password from 'primevue/password';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const twoFactorEnabled = ref(false);
</script>