<template>
    <p style="text-align: left;">Placeho {{ props.userNombre }}</p>
    <p style="text-align: left;">image {{ props.userCarrera }}</p>
</template>

<script setup>
    const props = defineProps(['userNombre', 'userCarrera']);
</script>

<style scoped>
    p {
        font-size: 20px;
        color :black;
    }
</style>