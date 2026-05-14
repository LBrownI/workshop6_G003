<script setup>
import { ref, onMounted } from "vue";
import UserProfile from "./components/UserProfile.vue";
import UserStats from "./components/UserStats.vue";

const user = ref({ name: "", carrera: "" });
const stats = ref({ AsignaturasAprobadas: 0, PromedioAcumulado: 0 });
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    user.value = {
      name: "Israel González",
      carrera: "Ingenieria civil en informatica",
    };
    stats.value = { AsignaturasAprobadas: 40, PromedioAcumulado: 5.8 };
    loading.value = false;
  }, 1200);
});

function handleUpdateName(newName) {
  user.value.name = newName;
}
</script>

<template>
  <main>
    <h1>Dashboard del Estudiante</h1>
    <p v-if="loading">Cargando datos...</p>
    <div v-else class="dashboard">
      <UserProfile :user="user" @update-name="handleUpdateName" />
      <UserStats :stats="stats" />
    </div>
  </main>
</template>

<style scoped></style>
