<template>
  <div class="custom-button" style="background-color: #DECA91;">
    <button
      type="button"
      class="btn btn-danger dropdown-toggle"
      style="background-color: #DECA91; border: none;"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <h1 style="color: black;">{{ selectedAttack || label }}</h1>
    </button>
    <ul class="dropdown-menu dropdown-menu-right">
      <li v-for="attack in backpackedAttacks" :key="attack.name">
        <a class="dropdown-item" @click="selectAttack(attack)">{{ attack.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    label: String,
    dropdownId: String,
  },
  computed: {
    selectedAttack() {
      return this.selectedAttackValue;
    },
    backpackedAttacks() {
      const store = useStore();
      // Retrieve backpacked attacks from the store or modify based on your store structure
      return store.state.backpackedAttacks;
    },
   },
  methods: {
    selectAttack(attack) {
      this.selectedAttackValue = attack.name;
    this.$emit('attack-selected', { dropdownId: this.dropdownId, attack: attack });
    },
    getSelectedAttackFromStore() {
     // Use the store to get the initial selected attack value
     const selectedAttack = this.$store.getters.getSelectedAttack(this.dropdownId);
     return selectedAttack ? selectedAttack.name : null;
  },
  },
  data() {
    return {
      selectedAttackValue: this.getSelectedAttackFromStore(),
    };
  },
};
</script>