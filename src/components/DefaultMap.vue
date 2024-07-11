<template>
    <div id="map"></div>
</template>

<script setup>
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import { ref, onMounted } from 'vue'

    const southWest = ref([-28.000, -50.450])
    const northEast = ref([-27.700, -50.100])

    onMounted(() => {
        initMap()
    })
    
    function initMap() {
        const bounds = L.latLngBounds(L.latLng(southWest.value[0], southWest.value[1]), 
                       L.latLng(northEast.value[0], northEast.value[1]));

        const map = L.map('map').setView([-27.813986416482756, -50.319007898797906], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        map.setMaxBounds(bounds);
        map.setMinZoom(12);
        map.setMaxZoom(18);

        map.on('drag', function() {
            map.panInsideBounds(bounds, { animate: false });
        });
    }
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