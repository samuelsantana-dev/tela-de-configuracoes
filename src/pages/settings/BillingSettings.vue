<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Cobrança</h2>
      <p class="text-gray-600">Gerencie seu plano, faturas e métodos de pagamento</p>
    </div>

    <div class="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h3 class="text-xl font-semibold mb-4">Plano Atual</h3>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-lg font-medium text-gray-900">Plano Pro</p>
          <p class="text-gray-600">R$ 49,90/mês</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">Próxima cobrança</p>
          <p class="font-medium text-gray-900">15/12/2024</p>
        </div>
      </div>
      <div class="mt-4">
        <Button label="Alterar Plano" class="p-button-outlined p-button-secondary mr-2" />
        <Button label="Cancelar Assinatura" text class="p-button-danger" />
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h3 class="text-xl font-semibold mb-4">Método de Pagamento</h3>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <i class="pi pi-credit-card text-2xl text-gray-600 mr-3"></i>
          <div>
            <p class="font-medium text-gray-900">Cartão de Crédito</p>
            <p class="text-sm text-gray-600">**** **** **** 4242</p>
          </div>
        </div>
        <Button label="Alterar" text class="p-button-sm" />
      </div>
      <Divider />
      <div class="mt-4">
        <Button label="Adicionar Novo Método" icon="pi pi-plus" class="p-button-outlined" />
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold mb-4">Histórico de Faturas</h3>
      <div class="space-y-3">
        <div v-for="invoice in invoices" :key="invoice.id" class="flex items-center justify-between py-3 border-b">
          <div>
            <p class="font-medium text-gray-900">{{ invoice.description }}</p>
            <p class="text-sm text-gray-600">{{ invoice.date }}</p>
          </div>
          <div class="text-right">
            <p class="font-medium text-gray-900">{{ invoice.amount }}</p>
            <Button label="Download" text class="p-button-sm p-button-secondary" />
          </div>
        </div>
      </div>
      <div class="mt-4 text-center">
        <Button label="Ver Todas as Faturas" text class="p-button-sm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const invoices = ref([
  {
    id: 1,
    description: 'Plano Pro - Novembro 2024',
    date: '15/11/2024',
    amount: 'R$ 49,90'
  },
  {
    id: 2,
    description: 'Plano Pro - Outubro 2024',
    date: '15/10/2024',
    amount: 'R$ 49,90'
  },
  {
    id: 3,
    description: 'Plano Pro - Setembro 2024',
    date: '15/09/2024',
    amount: 'R$ 49,90'
  }
]);
</script>