<script setup>
import part from './PartBoardComponent.vue'
</script>

<template>
    <div class="container ">
        <div class="row justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
            <div class="col">
                <part></part>
            </div>
            <div class="col">
                <part></part>
            </div>
        </div>
        <div class="row justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
            <div class="col">
                <part></part>
            </div>
            <div class="col">
                <part></part>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background-image: url('src/assets/boards/2x2.png');
        background-size: 641px 641px;
        background-repeat: no-repeat;
        background-position: top;
        height: 65vh;
    }
    .row{
        width: 480px;
    }
    .col{
        height: 224px;
    }
   
</style>