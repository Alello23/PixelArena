<script setup>
import { ref } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue'
import InputComponent from '../components/InputComponent.vue';
;
import { useStore } from 'vuex';  // Correct import statement for useStore
import { useRouter } from 'vue-router';

// Define ref variables to store input values for each instance
const UsernameVariable = ref('');
const PasswordVariable = ref('');
const isLogginError = ref(false); 
const store = useStore();
const router = useRouter();
// Function to handle changes in the input value for each instance
const handleInput1 = (value) => {
    UsernameVariable.value = value;
};

const handleInput2 = (value) => {
  PasswordVariable.value = value;
};


const handleLogin = async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players/join';
    isLogginError.value = false;
    const requestData = {
      player_ID: UsernameVariable.value,
      password: PasswordVariable.value,
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const userData = await response.json();
      store.dispatch('setUserData', userData); // Dispatch the data to the store
      // Optionally, you can redirect to the home page or perform other actions.
      router.push('/home'); // Navigate to the home page
    } else {
      console.error('Failed to login');
      isLogginError.value = true;
      // Handle the error if needed
    }
  } catch (error) {
    console.error('Error during login:');
    // Handle the error if needed
  }
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
                <ButtonComponent class="LoginButton" label="Login" @click="handleLogin"></ButtonComponent>          
            </div>
            <div class="col-12">           
                <p v-if="isLogginError" class="text-danger">Failed to login. Please check your credentials.</p>         
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
