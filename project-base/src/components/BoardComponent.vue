<script setup>
const props = defineProps(['size']);
</script>

<template>
  <div class="board-container">
    <!-- Aquí puedes cargar las imágenes del tablero desde src\assets\boards\ -->
    <img :src="`src/assets/boards/${size}x${size}.png`" alt="Board">
    <div class="spritesheet-frame"></div>
  </div>
</template>

<style scoped>
.board-container {
  position: relative;
  margin-top: 32px; /* Ajusta según sea necesario */
  margin-left: 64px; /* Ajusta según sea necesario */
}

.spritesheet-frame {
  position: absolute;
  top: 0px;
  left: 650px;
  width: 24px;
  height: 24px;
  background-image: url('src/assets/player/idle.png');
  background-position: -32px 0;
  background-size: auto; 
}

</style>