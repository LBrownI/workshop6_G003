<script setup>

const props = defineProps(['aproved', 'promedio'])
</script>

<template>
    <div class="columns">
    <div class="column"> Asignaturas Aprovadas:
    <div class="is-size-3"><b>{{ props.aproved }}</b></div></div>
    <div class="column"> Promedio Acumulado: <div class="is-size-3"><b>{{ props.promedio }}</b></div></div>
    </div>

    <button class=" button is-primary"> Avanzar Semestre (+1 Asignatura) </button>
</template>

<style>
</style>