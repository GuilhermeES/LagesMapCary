
<template>
    <div class="card flex justify-center">
        <Dialog :visible="visibleRegister" modal :closable="false" header="Registrar" :style="{ width: '25rem' }">
            <div class="card flex flex-col items-center gap-4">
                <form>
                    <div class="p-field">
                        <InputText 
                            v-model="name"
                            type="text"  
                            :style="{ width: '100%' }" 
                            :class="{ 'p-invalid': submitted && !name }" 
                            placeholder="Nome *" 
                        />
                        <small v-if="submitted && !name" class="p-error">Campo obrigatório</small>
                    </div>
                    <div class="p-field">
                        <InputText 
                            v-model="email"
                            type="email"  
                            :style="{ width: '100%' }" 
                            :class="{ 'p-invalid': submitted && !email }" 
                            placeholder="E-mail *" 
                        />
                        <small v-if="submitted && !email" class="p-error">Campo obrigatório</small>
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
                </form>
            </div>
            <template #footer>
                <Button label="Fechar" text severity="secondary" @click="$emit('close-modal-register'), clearForm()" autofocus />
                <Button label="Registrar" :loading="loading" @click="onSubmit()" severity="success" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import { post } from '@/service/api.js'

    defineProps(['visibleRegister']);
    defineEmits(['close-modal-register'])

    const name = ref('');
    const email = ref('');
    const password = ref('');
    const submitted = ref(false);
    const loading = ref(false);

    async function onSubmit() {
        submitted.value = true;

        if (name.value && email.value && password.value) {
            loading.value = true

            let schema = {
                nome: name.value,
                email: email.value,
                password: password.value
            };

            try {
                await post('/register', schema);
                clearForm();
                loading.value = false
            } 
            catch (error) {
                console.error('Erro ao registrar:', error);
                loading.value = false
            } 
        }
    }

    function clearForm() {
        name.value = '';
        email.value = '';
        password.value = '';
        submitted.value = false;
    }

</script>