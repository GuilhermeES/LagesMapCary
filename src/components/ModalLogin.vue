
<template>
    <div class="card flex justify-center">
        <Dialog :visible="visible" :closable="false" modal header="Login" :style="{ width: '25rem' }">
            <div class="card flex flex-col items-center gap-4">
                <InputText v-model="value" type="email" placeholder="E-mail *" :style="{ width: '100%' }"/>
                <InputText v-model="value" type="password"  placeholder="Senha *" :style="{ width: '100%' }"/>
            </div>
            <template #footer>
                <Button label="Fechar" text severity="secondary" @click="$emit('close-modal')" autofocus />
                <Button label="Entrar" severity="success" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    defineProps(['visible']);
    defineEmits(['close-modal'])

    const value = ref(null);
</script>