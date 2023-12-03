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
      <li v-for="attack in attacks" :key="attack">
        <a class="dropdown-item" @click="selectAttack(attack)">{{ attack }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
  computed: {
    selectedAttack() {
      return this.$store.getters.getSelectedAttack;
    },
  },
  methods: {
    selectAttack(attack) {
      this.$store.dispatch('selectAttack', attack);
    },
  },
  data() {
    return {
      attacks: [
        'Attack 1',
        'Attack 2',
        'Attack 3',
        'Attack 4',
        'Attack 5',
        'Attack 6',
        'Attack 7',
        'Attack 8',
        'Attack 9',
      ],
    };
  },
};
</script>