<template>
<h1>Dashboard del Estudiante </h1>
<p>Estadisticas academicas</p>
<ul>
<promedio v-for="agregarpromedio in semestre">
    {{ semestre }}
</promedio> 
<button @click="semestre"> Avanzar Semestre (+1 asignatura) </button>
</ul>
</template>
<script>
import UserProfile from './components/UserProfile.vue';
import UserStats from './components/UserStats.vue';

export default{
    data(){
        return{
         }
    },
    methods(){
        agregarpromedio();{
            this.semestre.push(this.promedio)
        }
    },
    components(){
        UserProfile
        UserStats
    },
    mensaje(){
        alert("Hola")
    }
}
</script>