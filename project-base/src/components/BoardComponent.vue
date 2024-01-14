<script setup>
import { ref } from 'vue';

const props = defineProps(['size']);

const position = ref({ x: 1, y: 1 });
const realPosition = ref({ x: 0, y: 0 });

const spritePosition = ref({ top: 28 + realPosition.value.x , left: 83 + realPosition.value.y });
const arrowPosition = ref({ top: spritePosition.value.top, left: spritePosition.value.left });
let dirección = 1;

const getBoardBackground = (size) => `url('src/assets/boards/${size}x${size}.png')`;

const getBackgroundStyle = () => ({
  backgroundImage: getBoardBackground(props.size),
});

const getSpriteStyle = () => ({
  top: `${spritePosition.value.top}px`,
  left: `${spritePosition.value.left}px`,
});

const getArrowStyle = () => ({
  top: `${arrowPosition.value.top}px`,
  left: `${arrowPosition.value.left}px`,
  transform: getTransform(),
});

const getTransform = () => {
  let transform = '';

  if (dirección === 1) {
    transform += 'translateX(5px) translateY(-15px)';
  } else if (dirección === 2) {
    transform += 'rotate(180deg) translateX(-5px) translateY(-20px)';
  } else if (dirección === 3) {
    transform += 'rotate(-90deg) translateX(-5px) translateY(-15px)';
  } else if (dirección === 4) {
    transform += 'rotate(90deg) translateX(5px) translateY(-25px)';
  }

  return transform;
};

const moveOnKeyPress = (event) => {
  if (event.key === 's') {
    dirección = 2;
  } else if (event.key === 'w') {
    dirección = 1;
  } else if (event.key === 'a') {
    dirección = 3;
  } else if (event.key === 'd') {
    dirección = 4;
  }

  if (event.key === ' ') {
    if (dirección === 1 && position.value.y != 1) {
      position.value.y -= 1;
    }else if (dirección === 2 && position.value.y != props.size) {
      position.value.y += 1;
    } else if (dirección === 3  && position.value.x != 1){
      position.value.x -= 1;
    }else if( dirección === 4 && position.value.x != props.size) {
      position.value.x += 1;
    }
  }
  if (position.value.x > 5) {
    realPosition.value.x = (position.value.x - 1) * 48 + 18 ;
  } else {
    realPosition.value.x = (position.value.x - 1) * 48;
  }
  if (position.value.y > 5) {
    realPosition.value.y = (position.value.y - 1) * 48 + 18 ;
  } else {
    realPosition.value.y = (position.value.y - 1) * 48;
  }
  
  
  spritePosition.value = { top: 28 + realPosition.value.y , left: 83 + realPosition.value.x };
  arrowPosition.value = { top: spritePosition.value.top, left: spritePosition.value.left };
};


</script>

<template>
  <div class="board-container" tabindex="0" :style="getBackgroundStyle()" @keydown="moveOnKeyPress" >
    <div class="spritesheet-frame" :style="getSpriteStyle()"></div>
    <div class="arrow" :style="getArrowStyle()"></div>
  </div>
</template>

<style scoped>
.board-container {
  position: relative;
  width: 640px;
  height: 640px;
  background-size: auto;
}

.spritesheet-frame {
  position: absolute;
  width: 24px;
  height: 25px;
  background-image: url('src/assets/player/idle.png');
  animation: playIdle 0.7s steps(5) infinite;
}

.arrow {
  position: absolute;
  width: 15px;
  height: 11px;
  background: url("src/assets/player/arrow.png");
  transform-origin: center bottom;
  animation: playArrow 0.7s steps(2) infinite;
}

@keyframes playIdle {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -124px;
  }
}

@keyframes playArrow {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -22px;
  }
}
</style>
