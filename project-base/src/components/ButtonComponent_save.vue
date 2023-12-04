<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const clearSavedAttacks = () => {
  // Dispatch the clearSavedAttacks action when the button is clicked
  store.dispatch('clearSavedAttacks');
};
</script>

<template>
  <RouterLink :to="path" class="btn btn-success custom-button" :style="{ backgroundColor: color }" @click="clearSavedAttacks">
    <h3>{{ label }}</h3>
  </RouterLink>
</template>

<script>
export default {
  props: {
    label: String,
    path: String,
    color: String,
  },
};
</script>