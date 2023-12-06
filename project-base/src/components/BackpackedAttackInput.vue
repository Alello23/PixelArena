<template>
  <div>
    <input v-model="name" placeholder="Name" />
    <input v-model="position" placeholder="Position" />
    <input v-model.number="power" placeholder="Power" />
    <button @click="addBackpackedAttack">Add Backpacked Attack</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const name = ref('');
    const position = ref('');
    const power = ref(0);

    const addBackpackedAttack = () => {
      const backpackedAttack = { name: name.value, position: position.value, power: power.value };
      store.dispatch('addBackpackedAttack', backpackedAttack);
      // Clear input values if needed
      name.value = '';
      position.value = '';
      power.value = 0;
    };

    return { name, position, power, addBackpackedAttack };
  },
};
</script>