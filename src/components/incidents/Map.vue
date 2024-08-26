<template>
    <div id="map"></div>
</template>

<script setup>
    import { useMap } from '@/composables/useMap.js'
    import { ref, onMounted } from 'vue'
    import L from 'leaflet';

    const popup = ref(null);
    const map = ref(null)

    onMounted(() => {
        const mapData = useMap(); 
        map.value = mapData.map.value
        popup.value = L.popup();
        clickMap()
    })

    function clickMap() {
        map.value.on('click', (e) => {
            popup.value
            .setLatLng(e.latlng)
            .setContent('Endereço adicionado!')
            .openOn(map.value);
        });
    }
</script>

<style scoped>
    #map{
        width: 100%;
        height: 342px;
        border-radius: 20px;
        position: relative;
        z-index: 1;
    }
</style>