
<template>
    <div class="card flex justify-center">
        <Dialog :visible="visible" :closable="false" modal header="Login" :style="{ width: '25rem' }">
            <div class="card flex flex-col items-center gap-4">
                <form>
                    <div class="p-field">
                        <InputText 
                            v-model="email"
                            type="text"  
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
                <Button label="Fechar" text severity="secondary" @click="$emit('close-modal'), clearForm()" autofocus />
                <Button label="Entrar" severity="success" autofocus @click="onLogin()" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { post } from '@/service/api.js'
    import { userStore } from '@/stores/user';
    
    defineProps(['visible']);
    const emit = defineEmits(['close-modal'])
    
    const store = userStore()
    const email = ref('');
    const password = ref('');
    const submitted = ref(false);

    async function onLogin() {
        submitted.value = true;

        if (email.value && password.value) {

            let schema = {
                email: email.value,
                password: password.value
            };

            try {
                let login = await post('/login', schema);
                store.loginUser(login.data, login.token, login.expires_in)
                clearForm();
                emit('close-modal');
                
            } 
            catch (error) {
                console.error('Erro ao registrar:', error);
                emit('close-modal');
            } 
        }
    }

    function clearForm() {
        email.value = '';
        password.value = '';
        submitted.value = false;
    }
</script>