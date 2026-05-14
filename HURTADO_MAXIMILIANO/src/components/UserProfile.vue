<script setup>
defineProps({
  nombre: String,
  edad: Number
})
</script>

<template>
  <p>{{ nombre }}</p>
</template>