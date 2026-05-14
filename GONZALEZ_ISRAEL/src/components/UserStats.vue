<script setup>
const props = defineProps({
  stats: {
    type: Object,
    default: () => ({ AsignaturAprobadas: 0, PromedioAcumulado: 0 }),
  },
});
</script>

<template>
  <section class="card stats">
    <h2>Estadísticas Academicas</h2>
    <p>
      <strong>AsignaturasAprobadas:</strong>
      {{ props.stats.AsignaturasAprobadas }}
    </p>
    <p>
      <strong>PromedioAcumulado:</strong> {{ props.stats.PromedioAcumulado }}
    </p>
  </section>
</template>

<style scoped>
.stats {
  width: 180px;
}
.card {
  border: 1px solid #f2ebeb;
  padding: 1rem;
  border-radius: 6px;
  background: #fff;
}
</style>
