<script setup>

const props = defineProps(['placeholder', 'image' ])


</script>

<template>
    <div class="box has-text-left">
    <p> Placeholder: <b class="is-size-4">{{ props.placeholder }}</b></p>
    <p> image: {{props.image }} </p>
    </div>

</template>

<style scoped>

</style>