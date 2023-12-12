<script setup>
import ButtonComponent from '../components/ButtonComponent.vue'
import InputComponent from '../components/InputComponent.vue';
</script>

<template>
    <div class="container" id="LoginBox">
        <div class="row justify-content-center text-center">
            <div class="col-8">
                <h4 class="mb-2 pb-2">Log In</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">   
                <InputComponent label="Username"></InputComponent>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">
                <InputComponent label="Password"></InputComponent>
            </div>
        </div>
        <div class="row justify-content-center text-center">    
            <div class="col-12">
                <router-link to="/home">
                    <ButtonComponent class="LoginButton" label="Login"></ButtonComponent>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>  
@import url('../assets/fonts.css');
.container{
    border-radius: 15px;
    background-color: #87CEEB;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}
h4 {
    font-family: 'PressStart2P', sans-serif;
    font-weight: 600;
    margin-top: 2rem;
}
.LoginButton{
    margin-top: 3rem;
    margin-bottom: 2rem;
}


</style>
