<template>
    <div class="layout">
        <TopMenu/>
        <div class="layout__grid">
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import TopMenu from '@/components/TopMenu.vue';
</script>
