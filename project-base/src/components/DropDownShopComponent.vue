<template>
  <div class="space_between">
    <div class="col rounded-column-2 text-center" style="background-color: #DECA91;">
      <h4>Equipped attacks</h4>
    </div>
  </div>

  <div v-for="option in dropdownOptions" :key="option" class="space_between" :style="{ marginRight: margins, marginLeft: margins }">
    <div class="col rounded-column-2 text-center">
      <h5>{{ getOptionName(option) }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    margins: String,
  },
  data() {
    return {
      dropdownOptions: [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: -1, y: -1 },
        { x: -1, y: 1 },
        { x: 1, y: -1 },
      ],
    };
  },
  methods: {
    getOptionName(option) {
      return `(${option.x},${option.y})`;
    },
  },
};
</script>