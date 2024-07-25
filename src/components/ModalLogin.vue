
<template>
    <div class="card flex justify-center">
        <Dialog :visible="visible" :closable="false" modal header="Login" :style="{ width: '25rem' }">
            <div class="card flex flex-col items-center gap-4">
                <div class="p-field">
                    <InputText 
                        v-model="email"
                        type="text"  
                        :style="{ width: '100%' }" 
                        :class="{ 'p-invalid': submitted && !email }" 
                        placeholder="E-mail *" 
                    />
                    <small v-if="submitted && !name" class="p-error">Campo obrigatório</small>
                </div>
               <div class="p-field">
                    <Password  
                        v-model="password"
                        :feedback="false"
                        :style="{ width: '100%' }" 
                        :class="{ 'p-invalid': submitted && !password }" 
                        placeholder="Password *" 
                    />
                    <small v-if="submitted && !password" class="p-error">Campo obrigatório</small>
                </div>
            </div>
            <template #footer>
                <Button label="Fechar" text severity="secondary" @click="$emit('close-modal'), clearForm()" autofocus />
                <Button label="Entrar" severity="success" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    defineProps(['visible']);
    defineEmits(['close-modal'])

    const email = ref('');
    const password = ref('');
    const submitted = ref(false);

    function clearForm() {
        email.value = '';
        password.value = '';
        submitted.value = false;
    }
</script>