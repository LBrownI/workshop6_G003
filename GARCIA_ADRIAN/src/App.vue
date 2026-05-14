<script setup>
import { ref, onMounted } from 'vue'
import UserProfile from './components/UserProfile.vue'
import UserStats from './components/UserStats.vue'

const userData = ref({
  name: '',
  carrer: ''
})

const userStats = ref({
  courses: 0,
  prom: 0
})


onMounted(() => {
  setTimeout(() => {
    userData.value = {
      name: 'Adrian Garcia',
      career: 'Ingeniería civil en Informatica',
    }
    userStats.value = {
      courses: 42,
      prom: 85
    }
  }, 2000)
})
</script>

<template>
  <div class="container">
    <UserProfile :data="userData" />
    <UserStats :stats="userStats" />
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

</style>
