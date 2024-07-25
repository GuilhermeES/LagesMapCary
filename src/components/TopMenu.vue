
<template>
    <div class="TopMenu card">
        <Menubar :model="items">
            <template #start>
                <Image src="src/assets/img/pin.gif" alt="Image" width="50" />
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
                <div class="menubar__buttons">
                    <Button @click="visible = true" label="Entrar" icon="pi pi-user" />
                    <ModalLogin :visible="visible" @close-modal="visible = false" />
                    
                    <Button @click="visibleRegister = true" label="Registrar" severity="secondary"  outlined icon="pi pi-user" />
                    <ModalRegister :visibleRegister="visibleRegister" @close-modal-register="visibleRegister = false" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
    import ModalLogin from './ModalLogin.vue';
    import ModalRegister from './ModalRegister.vue';
    import { useRouter } from 'vue-router';
    import { ref } from "vue";

    const router = useRouter();
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