<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Perfil</h2>
      <p class="text-gray-600">Gerencie suas informações pessoais e preferências</p>
    </div>

    <div class="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h3 class="text-xl font-semibold mb-4">Informações Pessoais</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Nome</label>
          <InputText v-model="profile.name" class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <InputText v-model="profile.email" class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
          <InputText v-model="profile.phone" class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Cargo</label>
          <InputText v-model="profile.position" class="w-full" />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold mb-4">Bio</h3>
      <Textarea v-model="profile.bio" rows="4" class="w-full" placeholder="Fale um pouco sobre você..." />
    </div>

    <div class="flex justify-end mt-6">
      <Button label="Salvar Alterações" icon="pi pi-check" class="p-button-primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const profile = ref({
  name: 'Samuel Santana da Silva',
  email: 'samuelsantanadasilva8@gmail.com ',
  phone: '(61) 99107-6831',
  position: 'Desenvolvedor',
  bio: 'Desenvolvedor front-end com experiência em Vue.js, Node.js e tecnologias modernas.'
});
</script>