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
        height: 100%;
    }
    .layout__home-card{
        height: 100%;
        border-top-left-radius: 20px !important;
        border-bottom-left-radius: 20px !important;
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        box-shadow: unset !important;
    }
    .layout__home-card .content {
        font-size: 12px;
    }

    @media(max-width:1024px) {
        .layout__home-bar{
            position: relative;
            width: 100%;
            margin-bottom: 10px;
            z-index: 1;
        }
        .layout__home-card{
            border-radius: 20px !important;
            height: 316px;
            overflow-y: auto;
        }
    }
</style>