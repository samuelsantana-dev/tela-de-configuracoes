<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h2 class="text-3xl font-bold  mb-2">Notificações</h2>
      <p class="">Controle como e quando você recebe notificações</p>
    </div>

    <div class="rounded-lg shadow-sm border p-6 space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium">Notificações por Email</p>
          <p class="text-sm ">Receba atualizações importantes por email</p>
        </div>
        <InputSwitch v-model="notifications.email" />
      </div>

      <Divider />

      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium ">Notificações Push</p>
          <p class="text-sm ">Receba notificações no seu navegador</p>
        </div>
        <InputSwitch v-model="notifications.push" />
      </div>

      <Divider />

      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium ">Notificações de Segurança</p>
          <p class="text-sm ">Alertas sobre atividades suspeitas na conta</p>
        </div>
        <InputSwitch v-model="notifications.security" />
      </div>

      <Divider />

      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium ">Newsletter</p>
          <p class="text-sm ">Receba novidades e atualizações do produto</p>
        </div>
        <InputSwitch v-model="notifications.newsletter" />
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <Button label="Salvar Preferências" icon="pi pi-check" class="p-button-primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputSwitch from 'primevue/inputswitch';
import Divider from 'primevue/divider';
import Button from 'primevue/button';

const notifications = ref({
  email: true,
  push: false,
  security: true,
  newsletter: false
});
</script>