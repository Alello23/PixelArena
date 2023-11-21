<script setup>
import ButtonComponentColor from '../components/ButtonComponentColor.vue'
</script>


<template>
    <div class="menu">
        <div class="row justify-content-left">
            <ButtonComponentColor label="Play" class="btn" id="playbtn"></ButtonComponentColor>
        </div>
        <div class="row">
            <ButtonComponentColor label="Shop" class="btn"></ButtonComponentColor>
        </div>
        <div class="row">
            <ButtonComponentColor label="Inventory" class="btn"></ButtonComponentColor>
        </div>
    </div>
        
</template>

<style scoped>
    .menu{
        background-color: #419FD6;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        width: 13rem;
        border-radius: 7px;
        margin-top: 2rem;
    }
    .btn{
        width: 8rem;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        height: 5rem;
    }
    #playbtn{
        width: 11rem;
    }
</style>