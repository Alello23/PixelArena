<script setup>
import { ref } from 'vue';
import DropDownShopComponent from '../components/DropDownShopComponent.vue';
import InputComponent from '../components/InputComponent.vue';
import { useStore } from 'vuex';

const store = useStore();

const AttacknameVariable = ref('');
const AttackPositionVariable = ref('');
const ImageVariable = ref('');

const handleInput1 = (value) => {
    AttacknameVariable.value = value;
    console.log('Saved nameVariable: ', AttacknameVariable.value);
};

const handleInput2 = (value) => {
    ImageVariable.value = value;
    console.log('Saved ImageVariable: ', ImageVariable.value);
};

const handleAttackPosition = (payload) => {
   
    AttackPositionVariable.value = payload;
    console.log('Saved AttackPositionVariable: ',  AttackPositionVariable.value);
};
const createAttack = async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks';
    const token = store.getters.getplayer.token;
    console.log('The value of the token is: ', token);

    const requestData = {
      attack_ID: AttacknameVariable.value,
      positions: AttackPositionVariable.value,
      img: ImageVariable.value,
    };

    console.log('Passed attack_ID: ', AttacknameVariable.value);
    console.log('Passed positions: ', AttackPositionVariable.value);
    console.log('Passed Image: ', ImageVariable.value);

    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      console.log('Attack created successfully');
      // Perform any additional actions after successful profile deletion
      // Use the `router` provided by the context to navigate
      // You might need to import the router if it's not available in the setup context
      // import { router } from 'your-router-file-path';
      // router.push('/');
    } else {
      console.error('Failed to create Attack ');
      // Handle the error if needed
    }
  } catch (error) {
    console.error('Error during attack creation:', error);
    // Handle the error if needed
  }
};

</script>
<template>
   <div class="modal fade" tabindex="-1" :id="id">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="col self-align-center">
                                    <div class="col" >
                                        <div class="row">
                                        <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
                                            <h1>Create attack</h1>
                                            <div class="col"> 
                                            <div class="space_between" style="margin-right: 60px; margin-left: 60px; ">
                                                <div class="custom-button"  style="background-color: #DECA91;">
                                                <InputComponent label="Add name to the attack" v-model="AttacknameVariable"
                                                :maxCharacters="20" @update:parentValue="handleInput1"></InputComponent>
                                                </div>
                                            </div>
                                            <div class="space_between" style="margin-right: 60px; margin-left: 60px; ">
                                                <DropDownShopComponent label="Position" @attackPosition-selected="handleAttackPosition"></DropDownShopComponent>
                                            </div> 
                                            <div class="space_between" style="margin-right: 60px; margin-left: 60px; ">
                                                <div class="custom-button"  style="background-color: #DECA91;">
                                                <InputComponent label="Add image to the attack" v-model="ImageVariable"
                                                :maxCharacters="150" @update:parentValue="handleInput2"></InputComponent>
                                                </div>
                                            </div>
                                        </div> 
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-2" >
                                        <div class="space_between">
                                        </div>
                                    </div>
                                    <div class="col" >
                                    <div class="row">
                                        <div class="col-2 ">
                                            <div class="space_between" >
                                            </div>
                                        </div>
                                        <div class="col-3 ">
                                            <div class="space_between" >
                                                <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#shop" data-bs-toggle="modal"> <h4>Cancel</h4></button>
                                                </div>
                                        </div>
                                        <div class="col-2 ">
                                            <div class="space_between" >
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="space_between" >
                                                <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#shop" data-bs-toggle="modal" @click="createAttack"> <h4>Create</h4></button>
                                                </div>
                                        </div>
                                        <div class="col-2 ">
                                            <div class="space_between" >
                                            </div>
                                        </div>
                                    </div> 
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
</template>

<script>

export default {
    props: {
      id: String
    },
};
</script>