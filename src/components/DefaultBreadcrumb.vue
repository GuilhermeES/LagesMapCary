<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
    const props = defineProps(['url'])

    import { ref, onMounted  } from "vue";

    const items = ref([]);
    const home = ref({
        icon: 'pi pi-home',
        route: '/'
    });

    onMounted(() => {
        transformRoute(window.location.pathname)    
    })

    function transformRoute(path) {
        const removeFirstBar = path.substring(1)
        const segments = removeFirstBar.split('/');
        let accumulatedRoute = '';
        const transformedItems = segments.map(segment => {
            accumulatedRoute += `/${segment}`; 
            return {
                label: segment,
                route: accumulatedRoute,
            };
        });
        items.value = transformedItems
    }
</script>
