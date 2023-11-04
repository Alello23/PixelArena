<script setup>
/*import ButtonComponent from '../components/ButtonComponent.vue'*/
import { RouterLink } from 'vue-router'
import InputComponent from '../components/InputComponent.vue';
</script>

<template>
    <div class="container" id="LoginBox">
        <div class="row justify-content-center">
            <div class="col-2">
                <h1 class="LoginTitle display-12">
                    Login
                </h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">   
            <InputComponent></InputComponent>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10 col-ms-5">
                <InputComponent></InputComponent>
            </div>
        </div>
        <div class="row justify-content-center">    
            <div class="d-grid gap-2 col-6 mx-auto">
                <RouterLink to="/profile" class="btn btn-success LoginButton" style="background-color: #8C9A45;" ><h4>Yes</h4></RouterLink>
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
.LoginTitle {
    font-family: 'PressStart2P', sans-serif;
    margin-top: 4rem;
    transform: translateX(-180%);
}
.row{
    margin-top: 2rem;
}
.LoginButton{
    margin-bottom: 4rem;
}

</style>
