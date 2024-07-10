<template>
    <Button label="Submit" />
    <DatePicker v-model="date" dateFormat="dd/mm/yy" showButtonBar  />
</template>

<script setup>
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';

import { ref } from "vue";

const checked = ref(false);
const date = ref();

</script>