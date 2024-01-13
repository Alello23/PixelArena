<script setup>
import Menu from '../components/MenuGameComponent.vue';
import Board from '../components/BoardComponent.vue';

const boardSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // Tamaños posibles de la pista
let selectedBoardSize = 2; // Tamaño inicial del tablero

const moveCharacter = (direction) => {
  // Lógica para mover el personaje según la dirección proporcionada
  // Puedes realizar acciones adicionales aquí si es necesario
  console.log(`Moviendo el personaje hacia ${direction}`);
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <Menu></Menu>
      </div>
    </div>
    <div class="row justify-content-center fixed-bottom">
        <Board :size="selectedBoardSize" class="col-5" style="padding: 0;"></Board>
    </div>
  </div>
</template>
