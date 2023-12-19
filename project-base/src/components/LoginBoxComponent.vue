<script setup>
import { ref } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue'
import InputComponent from '../components/InputComponent.vue';

// Define ref variables to store input values for each instance
const UsernameVariable = ref('');
const PasswordVariable = ref('');

// Function to handle changes in the input value for each instance
const handleInput1 = (value) => {
    UsernameVariable.value = value;
    console.log(UsernameVariable.value);
};

const handleInput2 = (value) => {
  PasswordVariable.value = value;
  console.log(PasswordVariable.value);
};

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
                <InputComponent label="Username" v-model="UsernameVariable"
                                :maxCharacters="21" @update:parentValue="handleInput1"></InputComponent>  
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">
                <InputComponent label="Password" v-model="PasswordVariable"
                                :maxCharacters="21" @update:parentValue="handleInput2"></InputComponent>
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
