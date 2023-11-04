<template>
  <div class="input-group">
    <input class="input" required type="text" id="username">
    <label class="label" for="username">Username</label>
  </div>
</template>

<style scoped>
.item-group {
  font-size: 1.25rem;
  position: relative;
  --primary: #87CEEB;
}
.input {
  all: unset;
  color: black;
  padding: 1rem;  
  border: 1px solid #419FD6;
  border-radius: 7px;
  transition: 150ms
    cubic-bezier(0.4, 0, 0.2, 1);
  width: 150%;
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
