<template>
  <div class="custom-button" style="background-color: #DECA91;">
    <button
      type="button"
      class="btn btn-danger dropdown-toggle"
      style="background-color: #ffffff; border: none;"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <h3 style="color: black;">{{ selectedAttack || label }}</h3>
    </button>
    <ul class="dropdown-menu dropdown-menu-right">
                <li @click="selectAttack('UP')"><a class="dropdown-item" href="#U">UP</a></li>
                <li @click="selectAttack('DOWN')"><a class="dropdown-item" href="#D">DOWN</a></li>
                <li @click="selectAttack('LEFT')"><a class="dropdown-item" href="#L">LEFT</a></li>
                <li @click="selectAttack('RIGHT')"><a class="dropdown-item" href="#R">RIGHT</a></li>
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
      this.selectedAttackValue = attack;
    this.$emit('attack-selected', { dropdownId: this.dropdownId, attack}); //TODO: aixo es per enviar al component que conte aixo REFERENCIA: Change equippedattacks
    },
    getSelectedAttackFromStore() {
    // Use the store to get the initial selected attack value
    return this.$store.getters.getSelectedAttack(this.dropdownId) || null;
  },
  },
  data() {
    return {
      selectedAttackValue: this.getSelectedAttackFromStore(),
    };
  },
};
</script>
