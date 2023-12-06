<template>
  <div>
    <div class="space_between" style="margin-bottom: 15px;">
      <div class="col rounded-column-2 text-center" style="background-color: #DECA91;">
        <h4> Backpacked Attacks </h4>
      </div>
    </div>

    <div v-for="attack in backpackedAttacks" :key="attack.name" class="space_between">
      <div v-if="attack" class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
        <h5>{{ attack.name }}</h5>
      </div>
    </div>

    <div class="space_between" style="margin-bottom: 60px;"></div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    margins: String,
  },
  computed: {
    backpackedAttacks() {
      const store = useStore();
      // Retrieve the backpacked attacks from the store
      return store.getters.getBackpackedAttacks;
    },
  },
};
</script>