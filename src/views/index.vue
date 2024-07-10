<template>
    <div class="layout__home-bar">
        <Card>
            <template #title>Últimos incidentes:</template>
            <template #content>
                <Fieldset>
                    <template #legend>
                        <div class="flex items-center pl-2">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold p-2">Amy Elsner</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Data: 00/00/0000
                    </p>
                </Fieldset>
                <Fieldset>
                    <template #legend>
                        <div class="flex items-center pl-2">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold p-2">Amy Elsner</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Data: 00/00/0000
                    </p>
                </Fieldset>
                <Fieldset>
                    <template #legend>
                        <div class="flex items-center pl-2">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold p-2">Amy Elsner</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Data: 00/00/0000
                    </p>
                </Fieldset>
                <Fieldset>
                    <template #legend>
                        <div class="flex items-center pl-2">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold p-2">Amy Elsner</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Data: 00/00/0000
                    </p>
                </Fieldset>
            </template>
        </Card>
    </div>
</template>

<script setup>
    import Card from 'primevue/card';
    import Fieldset from 'primevue/fieldset';
    import Avatar from 'primevue/avatar';
</script>

<style scoped>
    .layout__home-bar{
        position: absolute;
        z-index: 1000;
        width: 400px;
        margin-top: 83px;
        margin-left: 10px;
    }
</style>