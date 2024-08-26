
<template>
    <div class="TopMenu card">
        <Menubar :model="items">
            <template #start>
               <i class="pi pi-map-marker" style="font-size: 1.5rem"></i>
            </template>   
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple class="flex items-center" :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
            <template #end >
                <div class="menubar__buttons" v-if="!store.isAuth">
                    <Button @click="visible = true" label="Entrar" icon="pi pi-user" raised  />
                    <ModalLogin :visible="visible" @close-modal="visible = false" />
                    
                    <Button @click="visibleRegister = true" label="Registrar" severity="secondary"  outlined icon="pi pi-user" raised  />
                    <ModalRegister :visibleRegister="visibleRegister" @close-modal-register="visibleRegister = false" />
                </div>
                <div class="logged" v-if="store.isAuth">
                    Olá <strong> {{store.getUser.nome}} </strong> | <Button icon="pi pi-sign-out" @click="logout()" severity="danger" size="small"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
    import ModalLogin from './ModalLogin.vue';
    import ModalRegister from './ModalRegister.vue';
    import { ref } from "vue";
    
    import { useRouter } from 'vue-router';
    const router = useRouter();

    import { userStore } from '@/stores/user';
    const store = userStore()

    const visible = ref(false);
    const visibleRegister = ref(false);
    
    const items = ref([
        {
            label: 'Home',
            icon: 'pi pi-home',
            route: '/',
        },
        {
            label: 'Incidentes',
            icon: 'pi pi-exclamation-triangle',
            route: '/incidentes',
        },
    ]);

    function logout() {
        store.logoutUser()
        router.push({ name: 'home' })
    }

    function toggleDarkMode() {
        const element = document.querySelector('html');
        element.classList.toggle('my-app-dark');
    }

</script>

<style scoped>
    .TopMenu{
        margin-bottom: 1rem;
        z-index: 100;
        position: relative;
    }
    .menubar__buttons{
        display: flex;
        gap: 5px;
    }
</style>