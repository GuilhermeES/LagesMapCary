<template>
    <div class="row">
        <div class="d-block d-md-flex justify-content-between align-items-center">
            <h2> Novo incidente</h2>
            <DefaultBreadcrumb/>
        </div>                  
        <div class="col-md-12">
            <div class="form__incident">
                <form>
                    <div class="mb-3">
                       <div class="row">
                            <div class="col-lg-10 mb-3 mb-lg-0">
                                <InputText type="text" placeholder="* Título" />
                            </div>
                            <div class="col-lg-2">
                                <DatePicker id="datepicker-24h" v-model="time" showIcon fluid iconDisplay="input" showTime hourFormat="24" placeholder="* Data"/>
                            </div>
                       </div>
                    </div>
                   <div class="mb-3">
                        <Select v-model="selectedCity" placeholder="* Tipo" class="w-100" />
                   </div>
                   <div class="mb-3">
                        <Select v-model="selectedCity" placeholder="* Gravidade" class="w-100" />
                   </div>
                   <div class="mb-3">
                        <Textarea v-model="value" placeholder="Breve Descrição" rows="5" cols="30" class="w-100" />
                   </div>
                   <div class="mb-3">
                        <div class="info mb-2">* Clique no mapa o local desejado da ocorrência</div>
                        <Map/>
                   </div>
                   <Button label="Cadastrar" severity="success" raised class="me-2" />
                   <router-link :to="{ name: 'incidents' }">
                        <Button label="Voltar" severity="secondary" outlined  />
                   </router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    import DefaultBreadcrumb from '@/components/DefaultBreadcrumb.vue'
    import Map from '@/components/incidents/Map.vue'

    import { ref } from "vue";
    
    const time = ref();
    const url = ref(window.location.pathname)
</script>


<style scoped>

</style>