<script setup lang="ts">
import UserStats from './components/UserStats.vue';
import UserProfile from './components/UserProfile.vue';
</script>

<template>
  <div id="Titulo">
    <h2 style="text-align: center;">Dashboard del estudiante</h2>
    <hr>
  </div>
  <div id="cajaUserData">
    <UserProfile :userNombre="'Juan Pérez'" :userCarrera="'Ingeniería Civil Informática'" />
  </div>
  <div id="cajaCurso">
    <UserStats :userAsigntaturas="40" :userPromedio="5.8" />
  </div>
</template>

<style>
    * {
        font-family: 'comic sans ms';
    }
</style>
