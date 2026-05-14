<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="profile-card">
    <h2>Dashboard del Estudiante</h2>
    <div class="profile-content">
      <p><strong>Nombre:</strong> {{ data.name || 'Cargando...' }}</p>
      <p><strong>Carrera:</strong> {{ data.career || 'Cargando...' }}</p>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 15px;
}

.profile-content p {
  margin: 10px 0;
  color: #000000;
}
</style>
