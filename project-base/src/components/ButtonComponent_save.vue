<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const saveAttack = () => {
  const selectedAttack = store.getters.getSelectedAttack;
  // You can perform any action with the selectedAttack here, e.g., save it to the server
  console.log('Selected Attack:', selectedAttack);

  // Continue with the existing functionality
};

</script> 
<template>
  <RouterLink :to="path" class="btn btn-success custom-button" :style="{ backgroundColor: color }" @click="saveAttack">
    <h3>{{ label }}</h3>
  </RouterLink>
</template>


<script>
export default {
  props: {
    label: String,
    path: String,
    color: String
  }
}
</script>