<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h2 class="text-3xl font-bold  mb-2">Integrações</h2>
      <p class="">Conecte suas ferramentas e serviços favoritos</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class=" rounded-lg shadow-sm border p-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <i class="pi pi-google text-blue-600 text-xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-semibold ">Google Drive</h3>
            <p class="text-sm ">Armazenamento em nuvem</p>
          </div>
        </div>
        <p class=" mb-4 text-sm">
          Conecte sua conta do Google Drive para salvar e sincronizar arquivos automaticamente.
        </p>
        <Button 
          :label="integrations.googleDrive ? 'Desconectar' : 'Conectar'" 
          :class="integrations.googleDrive ? 'p-button-outlined p-button-secondary' : 'p-button-primary'"
          class="w-full"
        />
      </div>

      <div class=" rounded-lg shadow-sm border p-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <i class="pi pi-slack text-purple-600 text-xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-semibold ">Slack</h3>
            <p class="text-sm ">Comunicação em equipe</p>
          </div>
        </div>
        <p class=" mb-4 text-sm">
          Receba notificações e atualizações diretamente no seu workspace do Slack.
        </p>
        <Button 
          :label="integrations.slack ? 'Desconectar' : 'Conectar'" 
          :class="integrations.slack ? 'p-button-outlined p-button-secondary' : 'p-button-primary'"
          class="w-full"
        />
      </div>

      <div class=" rounded-lg shadow-sm border p-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
            <i class="pi pi-github text-gray-800 text-xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-semibold ">GitHub</h3>
            <p class="text-sm ">Controle de versão</p>
          </div>
        </div>
        <p class=" mb-4 text-sm">
          Conecte seus repositórios para sincronizar issues e pull requests.
        </p>
        <Button 
          :label="integrations.github ? 'Desconectar' : 'Conectar'" 
          :class="integrations.github ? 'p-button-outlined p-button-secondary' : 'p-button-primary'"
          class="w-full"
        />
      </div>

      <div class=" rounded-lg shadow-sm border p-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <i class="pi pi-dropbox text-blue-500 text-xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-semibold ">Dropbox</h3>
            <p class="text-sm ">Armazenamento em nuvem</p>
          </div>
        </div>
        <p class=" mb-4 text-sm">
          Sincronize arquivos e documentos com sua conta do Dropbox.
        </p>
        <Button 
          :label="integrations.dropbox ? 'Desconectar' : 'Conectar'" 
          :class="integrations.dropbox ? 'p-button-outlined p-button-secondary' : 'p-button-primary'"
          class="w-full"
        />
      </div>
    </div>

    <div class=" rounded-lg shadow-sm border p-6 mt-6">
      <h3 class="text-xl font-semibold mb-4">API Keys</h3>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium ">Chave de Desenvolvimento</p>
            <p class="text-sm ">sk_live_••••••••••••••••••••••••</p>
          </div>
          <div class="flex space-x-2">
            <Button label="Copiar" text class="p-button-sm p-button-secondary" />
            <Button label="Regenerar" text class="p-button-sm p-button-danger" />
          </div>
        </div>
        <Divider />
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium ">Chave de Produção</p>
            <p class="text-sm ">sk_prod_••••••••••••••••••••••••</p>
          </div>
          <div class="flex space-x-2">
            <Button label="Copiar" text class="p-button-sm p-button-secondary" />
            <Button label="Regenerar" text class="p-button-sm p-button-danger" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <Button label="Criar Nova Chave API" icon="pi pi-plus" class="p-button-outlined" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const integrations = ref({
  googleDrive: true,
  slack: false,
  github: true,
  dropbox: false
});
</script>