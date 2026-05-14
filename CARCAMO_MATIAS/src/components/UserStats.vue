<template>
    <div id="tituloDatosEstudiante">
        <h5 style="text-align: left;">Estadisticas Academicas</h5>
    </div>
    <p>Asignaturas aprobadas</p>
    <h1> {{ props.userAsigntaturas }} </h1>
    <p> Promedio acumulado</p>
    <h1> {{ props.userPromedio }} </h1>
</template>

<script setup>
    const props = defineProps(['userAsigntaturas', 'userPromedio']);

</script>


<style scoped>
    h5 {
        font-size: 18px;
        color :black;
    }
    p {
        font-size: px;
        color :rgb(97, 96, 96);
    }
    h1 {
        font-size: 30px;
        color :rgb(0, 0, 0);
    }
</style>