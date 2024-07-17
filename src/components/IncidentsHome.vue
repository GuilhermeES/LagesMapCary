<template>
    <Card class="layout__home-card">
        <template #title>
            <i class="pi pi-exclamation-triangle"></i>
            Últimos incidentes:
        </template>
        <template #content>
            <router-link to="/" class="no-underline">
                <Fieldset>
                    <template #legend>
                        <div class="flex items-center pl-2">
                            <span class="font-bold p-0">Anônimo</span>
                        </div>
                    </template>
                    <div class="content">
                        <strong>Data: 00/00/0000 00:00</strong> <br>
                        <div class="mb-3"> Batida de veículo </div>
                        <Badge value="Grave" severity="danger" size="small"></Badge>
                    </div>
                </Fieldset>
            </router-link>
            <Fieldset>
                <template #legend>
                    <div class="flex items-center pl-2">
                        <span class="font-bold p-0">Anônimo</span>
                    </div>
                </template>
                <div class="content">
                    <strong>Data: 00/00/0000 00:00</strong> <br>
                    <div class="mb-3"> Buraco no asfalto </div>
                    <Badge value="Informativo" severity="info" size="small"></Badge>
                </div>
            </Fieldset>
        </template>
    </Card>
</template>