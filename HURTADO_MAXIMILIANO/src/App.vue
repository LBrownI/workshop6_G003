<script setup>
import { ref } from 'vue'
import Usuario from './components/UserProfile.vue'
import Stats from './components/UserStats.vue'

const usuarios = ref(
    [
    { id: 1, nombre: 'Matias' },
    
    
  ]
)

const estadisticas = ref(
    [
    { asigns: 3 , Prom: 20 },
    
  ]
)

</script>

<template>
<h1>Dashboard del estudiante</h1>
<Usuario v-for="u in usuarios"
  :key="u.id"
  :nombre="u.nombre"
  :edad="u.edad"


/>
<Stats v-for="s in estadisticas" :asigns="s.asigns" :Prom="s.Prom"/>
</template>

<style scoped></style>