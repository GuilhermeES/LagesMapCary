import { ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function useMap() {

    const southWest = ref([-28.000, -50.450])
    const northEast = ref([-27.700, -50.100])
    const map = ref();

    const bounds = L.latLngBounds(L.latLng(southWest.value[0], southWest.value[1]), 
                    L.latLng(northEast.value[0], northEast.value[1]));

    map.value = L.map('map').setView([-27.813986416482756, -50.319007898797906], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map.value);

    map.value.setMaxBounds(bounds);
    map.value.setMinZoom(12);
    map.value.setMaxZoom(18);

    map.value.on('drag', function() {
        map.value.panInsideBounds(bounds, { animate: false });
    });

    return { map };
}
