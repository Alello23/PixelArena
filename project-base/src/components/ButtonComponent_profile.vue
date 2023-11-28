  <script setup>
  import { RouterLink } from 'vue-router'
  </script>

  <template>
    <RouterLink :to="path" class="btn btn-success custom-button" :style="{ backgroundColor: color }">
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

