<template>
    <div id="map"></div>
</template>

<script setup>
    import { useMap } from '@/composables/useMap.js'
    import { ref, onMounted } from 'vue'
    import L from 'leaflet';

    onMounted(() => {
        useMap(); 
    })
</script>

<style scoped>
    #map{
        width: 100%;
        height: 93vh;
        border-radius: 20px;
        position: relative;
        z-index: 1;
    }
</style>