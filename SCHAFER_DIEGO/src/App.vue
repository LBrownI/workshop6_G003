<template>
  <h1 id="center">Dashboard  del estudiante</h1>
  <div>
    <p>Nombre del estudiante</p>
    <UserProfile nombre="Diego Schafer" />
    <p>Carrera</p>
    <UserProfile carrera="Ingeniería Civíl Informática" />
  </div>
  <hr>
  <div>
    <p>Asignaturas aprobadas</p>
    <UserStats aprobadas="40" />
    <p>Promedio de notas</p>
    <UserStats promedio="5.8" />
  </div>
</template>

<script setup>
import UserProfile from './components/UserProfile.vue';
import UserStats from './components/UserStats.vue';
</script>

