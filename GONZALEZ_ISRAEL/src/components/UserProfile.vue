<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  user: {
    type: Object,
    default: () => ({ name: "", carrera: "" }),
  },
});
const emit = defineEmits(["update-name"]);
const newName = ref(props.user.name || "");

watch(
  () => props.user.name,
  (v) => {
    newName.value = v || "";
  },
);

function submit() {
  if (newName.value && newName.value !== props.user.name) {
    emit("update-name", newName.value);
  }
}
</script>

<template>
  <section class="card profile">
    <h2>Placeholder image</h2>
    <p><strong>Nombre:</strong> {{ props.user.name || "—" }}</p>
    <p><strong>Carrera:</strong> {{ props.user.carrera || "—" }}</p>
    <div class="edit">
      <input v-model="newName" placeholder="Nuevo nombre" />
      <button @click="submit">Actualizar nombre</button>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  background: #fff;
}
.profile {
  width: 300px;
}
.edit {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}
input {
  flex: 1;
  padding: 0.4rem;
}
button {
  padding: 0.4rem 0.6rem;
}
</style>
