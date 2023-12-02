 
  <template>
    <button type="button" class="custom-button" :style="{ backgroundColor: color }"> <h3>{{ label }}</h3></button>
  </template>

  <script>
  export default {
    props: {
      label: String,
      color: String
    }
  }
  </script>

