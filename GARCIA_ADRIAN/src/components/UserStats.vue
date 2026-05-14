<script setup>
defineProps({
  stats: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="stats-card">
    <h2>Estadísticas Académicas</h2>
    <div class="stats-grid">    
      <div class="stat-item">
        <div class="stat-number">{{ stats.courses || 0 }}</div>
        <div class="stat-label">Cursos</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ stats.prom || 0 }}</div>
        <div class="stat-label">Promedio</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 15px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.stat-item {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 5px;
}

.stat-label {
  color: #666;
  font-size: 14px;
}
</style>
