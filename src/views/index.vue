<template>
    <div class="layout__home-bar">
        <IncidentsHome/>
    </div>
    <DefaultMap/>
</template>

<script setup>
    import DefaultMap from '@/components/DefaultMap.vue';
    import IncidentsHome from '@/components/IncidentsHome.vue';
</script>

<style scoped>
    .layout__home-bar{
        position: absolute;
        z-index: 1000;
        width: 300px;
        margin-top: 83px;
        margin-left: 10px;
    }
    .layout__home-card .content {
        font-size: 12px;
    }
</style>