<script setup>
import { ref } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue'
import InputComponent from '../components/InputComponent.vue';
import { useStore } from 'vuex';  // Correct import statement for useStore
import { useRouter } from 'vue-router';

// Define ref variables to store input values for each instance
const UsernameVariable = ref('');
const PasswordVariable = ref('');
const Password2Variable = ref('');
const ImageVariable = ref('');
const store = useStore();
const router = useRouter();

// Function to handle changes in the input value for each instance
const handleInput1 = (value) => {
    UsernameVariable.value = value;
};

const handleInput2 = (value) => {
  PasswordVariable.value = value;
};

const handleInput3 = (value) => {
 Password2Variable.value = value;
};
const handleInput4 = (value) => {
    ImageVariable.value = value;
};
const register = async () => {
    
    if (
        UsernameVariable.value !== '' &&
        PasswordVariable.value !== '' &&
        Password2Variable.value !== '' &&
        ImageVariable.value !== '' &&
        PasswordVariable.value === Password2Variable.value
    ) {
        await sendRegisterRequest();
    } else {
        // Handle invalid registration data or provide feedback to the user
        console.error('Invalid registration data');
    }
};

const sendRegisterRequest = async () => {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players/';

    const requestData = {
        player_ID: UsernameVariable.value,
        password: PasswordVariable.value,
        img: ImageVariable.value,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (response.ok) {
            console.log('Registration successful');
            // Perform any additional actions after successful registration
            // Call handleLogin after successful registration
            await handleLogin();
            return true; // Indicates successful registration
        } else {
            console.error('Failed to register');
            // Handle the error if needed
            return false; // Indicates unsuccessful registration
        }
    } catch (error) {
        console.error('Error during fetch:');
        // Handle the error if needed
        return false; // Indicates unsuccessful registration
    }
};

const handleLogin = async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players/join';
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
                <h4 class="mb-2 pb-2">Sign Up</h4>
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
        <div class="row justify-content-center">
            <div class="col-10">
                <InputComponent label="Confirm password" v-model="Password2Variable"
                                :maxCharacters="21" @update:parentValue="handleInput3"></InputComponent>
            </div>
            <div class="col-10">
                <InputComponent label="Image Link" v-model="ImageVariable"
                                :maxCharacters="150" @update:parentValue="handleInput4"></InputComponent>
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-12">
                    <ButtonComponent class="LoginButton" label="Register" color="white" background="#419FD6"
                                  @click="register"></ButtonComponent>
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

</style>
