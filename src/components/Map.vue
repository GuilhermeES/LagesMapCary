<template>
    <div id="map"></div>
</template>

<script setup>
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import { onMounted } from 'vue'

    onMounted(() => {
        initMap()
    })

    function initMap() {
      const map = L.map('map').setView([-27.813986416482756, -50.319007898797906], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
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