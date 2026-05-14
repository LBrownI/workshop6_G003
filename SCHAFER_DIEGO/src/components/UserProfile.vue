<template>
    <div>
        <p>{{ nombre }}</p>
        <p>{{ carrera }}</p>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
const props = defineProps(['nombre', 'carrera'])
</script>
