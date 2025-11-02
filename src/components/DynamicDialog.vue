<script>
    
</script>

<template>
    <Button label="sair" icon="pi pi-sign-out" @click="visible = true"></Button>
    <DynamicDialog v-model:visible="visible">
        <p>Tem certeza que deseja sair?</p>
        <Button label="Cancelar" @click="visible = false"></Button>
        <Button label="Confirmar" severity="danger" @click="confirmLogout"></Button>
    </DynamicDialog>
</template>