<template>
  <div>
    <input v-model="name" :placeholder="placeholderText" class="form-control input-lg" />
    <!--<button @click="addData" class="btn btn-primary btn-lg">ADD</button>-->
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const name = ref('');

    const addData = () => {
      const backpackedAttack = { name: name.value };
      store.dispatch('addData', backpackedAttack);
      // Clear input values if needed
      name.value = '';
    };

    return { name, addData };
  },
  props: {
    placeholderText: String,
  },
};
</script>

<style scoped>
/* Add additional styling as needed */
.input-lg {
  height: 70px; /* Adjust the height as needed */
  font-size: 26px; /* Adjust the font size as needed */
  padding: 10px 10px; /* Adjust the padding as needed */
}

.btn-lg {
  padding: 10px 20px; /* Adjust padding as needed */
  font-size: 18px; /* Adjust the font size as needed */
}
</style>
