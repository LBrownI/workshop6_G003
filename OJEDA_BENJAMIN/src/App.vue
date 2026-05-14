<script setup>
import UserProfile from './components/UserProfile.vue'
import UserStats from './components/UserStats.vue'
</script>

<template>
  <body>
    <center><h2>Dashboard del estudiante</h2></center>
    <div>
      <UserP 
      nombre= "Juan perez"
      carrera=" Ingenieria civil informatica"/> 
      
    </div>
  </body>
  
</template>

<style>
body {
  width:800px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0 20px 20px 20px;
  
}
  
</style>