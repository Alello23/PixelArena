<template>
  <div class="space_between">
    <div class="col rounded-column-2 text-center" style="background-color: #DECA91;">
      <h4>Equipped attacks</h4>
    </div>
  </div>

  <div v-for="dropdown in ['dropdown1', 'dropdown2', 'dropdown3']" :key="dropdown" class="space_between" :style="{ marginRight: margins, marginLeft: margins }">
    <div class="col rounded-column-2 text-center">
      <h5>{{ getEquippedAttackName(dropdown) || getDefaultAttackName(dropdown) }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    margins: String,
  },
  methods: {
    getEquippedAttackName(dropdown) {
      const equippedAttack = this.$store.getters.getSelectedAttack(dropdown);
      return equippedAttack ? equippedAttack.attack_ID : null;
    },
    getDefaultAttackName(dropdown) {
      // Provide default names based on the dropdown
      switch (dropdown) {
        case 'dropdown1':
          return 'Attack 3';
        case 'dropdown2':
          return 'Attack 6';
        case 'dropdown3':
          return 'Attack 7';
        default:
          return null;
      }
    },
  },
};
</script>