<template>
  <div>
    <Button
      label="Sair"
      icon="pi pi-sign-out"
      severity="danger"
      outlined
      class="p-button-secondary"
      @click="visible = true"
    />

    <Dialog
      v-model:visible="visible"
      modal
      header="Confirmar Saída"
      :style="{ width: '400px' }"
      :breakpoints="{ '960px': '75vw', '641px': '90vw' }"
    >
      <div class="flex flex-col items-center text-center space-y-4">
        <div class="w-16 h-16  rounded-full flex items-center justify-center">
          <i class="pi pi-exclamation-triangle text-2xl text-red-600 dark:text-red-400"></i>
        </div>
        
        <div class="space-y-2">
          <h3 class="text-xl font-semibold  ">
           Confirme sua saida
          </h3>
          <p class="leading-relaxed">
            Tem certeza que deseja sair da sua conta? 
            Você precisará fazer login novamente para acessar o sistema.
          </p>
        </div>
      </div>

      <template #footer>
        <div class="flex gap-3 justify-end w-full">
          <Button
            label="Cancelar"
            severity="secondary"
            outlined
            @click="visible = false"
            class="px-6 py-2 border-gray-300 dark:border-gray-600   hover:bg-gray-50 dark:hover:bg-gray-700"
          />
          <Button
            label="Sair Agora"
            severity="danger"
            @click="confirmLogout"
            class="px-6 py-2 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 transition-colors"
            :loading="loading"
          />
        </div>
      </template>
    </Dialog>

    <Toast />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'

const visible = ref(false)
const loading = ref(false)
const router = useRouter()
const toast = useToast()

const confirmLogout = async () => {
  loading.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    
    toast.add({
      severity: 'success',
      summary: 'Logout realizado',
      detail: 'Você saiu da sua conta com sucesso',
      life: 3000
    })
    
    setTimeout(() => {
      router.push('/login')
    }, 1000)
    
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Erro ao sair',
      detail: 'Ocorreu um erro durante o logout',
      life: 3000
    })
  } finally {
    loading.value = false
    visible.value = false
  }
}
</script>