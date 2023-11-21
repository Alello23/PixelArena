<template>
  <div class="input-group">
    <input class="input" required type="text" id="username">
    <label class="label" for="inputId">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    inputId: String
  }
}
</script>

<style scoped>
.input {
  all: unset;
  color: black;
  padding: 1rem;  
  border: 1px solid #419FD6;
  border-radius: 7px;
  transition: 150ms
    cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
.label{
  position:absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  pointer-events: none;
  transition: 150ms
    cubic-bezier(0.4, 0, 0.2, 1);
}
.input:focus {
  border: 1px solid
  #419FD6;
}

.input:is(:focus, :valid) ~ label {
  transform: 
    translateY(-120%)
    scale(0.7);
  background-color: #87CEEB;
  padding-inline: 0.3rem;
  color: white;
}
</style>
