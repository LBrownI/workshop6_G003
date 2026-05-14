<script setup>
import {ref, onMounted } from 'vue';
import UserProfile from './components/UserProfile.vue';
import UserStats from './components/UserStats.vue';
import 'bulma/css/bulma.css'

const placeholder = ref(null)
  const image = ref(null)

  const aprovedlessons = ref(null)
  const promedio = ref(null)

onMounted(() => {
  placeholder.value="Juan Pérez";
  image.value="Ingeniería Civil Informática";
  aprovedlessons.value=40
  promedio.value= 5.8

});

</script>

<template>
  <div class="box">
  <div class="is-size-2"> Dashboard del Estudiante </div>
  <hr>
  <UserProfile :placeholder="placeholder" :image="image" ></UserProfile>
  <div class="is-size-3">Estadisticas Academicas</div>
  <hr>
  <UserStats :aproved="aprovedlessons" :promedio="promedio" ></UserStats>
  </div>
</template>

<style>

</style>