<template>
    <div>
        <p>{{ aprobadas }}</p>
        <p>{{ promedio }}</p>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
const props = defineProps(['aprobadas', 'promedio'])
</script>

