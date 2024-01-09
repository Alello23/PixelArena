<template>
  <div class="custom-button" style="background-color: #DECA91;">
    <button
      type="button"
      class="btn btn-danger dropdown-toggle"
      style="background-color: #DECA91; border: none;"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <h1 style="color: black;">{{ selectedOption || label }}</h1>
    </button>
    <ul class="dropdown-menu dropdown-menu-right">
      <li v-for="option in staticOptions" :key="option">
        <a class="dropdown-item" @click="selectOption(option)">{{ option }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    dropdownId: String,
    modelValue: String, // Use v-model for two-way binding
  },
  data() {
    return {
      selectedOption: this.modelValue,
      staticOptions: ['(0,1)' , '(1,0)' , '(1,1)' ,'(0,-1)', '(-1,0)','(-1,-1)','(-1,1)','(1,-1)'],
    };
  },
  watch: {
    // Watch for changes in the external modelValue and update the internal selectedOption
    modelValue(newValue) {
      this.selectedOption = newValue;
    },
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      // Emit input event for two-way binding
      this.$emit('attackPosition-selected', option);
    },
  },
};
</script>