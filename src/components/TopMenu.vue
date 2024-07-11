
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
                <Button as="router-link" label="Entrar" icon="pi pi-user" to="/login" />
            </template>
        </Menubar>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    import { ref } from "vue";

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
</style>