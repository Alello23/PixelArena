<script setup>
import DropDownComponent from '../components/DropDownComponent.vue';
import InputComponent from '../components/InputComponent.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();
const PriceVariable = ref('');

const selectedAttacks = ref({ dropdown: null});

const handleSaveAttacks = (payload) => {
    console.log('Selected Attack Payload:', payload);
  // Access payload.dropdownId and payload.attack here
  const { dropdownId, attack } = payload;

  // Update the selectedAttacks variable based on which dropdown emitted the payload
  selectedAttacks.value[dropdownId] = attack;
}; 
const handleInput2 = (value) => {
    PriceVariable.value = value;
    console.log('Saved PriceVariable: ', PriceVariable.value);

};
const sellAttack = async () => {
  try {
    const { dropdown } = selectedAttacks.value;
    const apiUrl = `https://balandrau.salle.url.edu/i3/shop/attacks/${dropdown.attack_ID}/sell`;
    const token = store.getters.getplayer.token;
    console.log('The value of the token is: ', token);
    console.log('Passed Attacks: ', dropdown.attack_ID);
    // Parse the value as an integer
    const priceValue = parseInt(PriceVariable.value, 10);
    console.log('Passed PriceVariable: ', priceValue);
    const requestData = {
      price: priceValue,
    };
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
      console.log('Attack put on sale successfully');
    } else {
      console.error('Failed to sell Attack ');
      // Handle the error if needed
    }
  } catch (error) {
    console.error('Error during attack selling:', error);
    // Handle the error if needed
  }
};
// Fetch attacks from the API when the component is mounted
onMounted(async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players/attacks';
    const token = store.getters.getplayer.token;
    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });;

    if (response.ok) {
      store.dispatch('clearAllBackpackedAttacks');
      const attacks = await response.json();
      // Dispatch the attacks to the store
      attacks.forEach((backpackedAttacks) => {
        if (backpackedAttacks.equipped != true) {
          store.dispatch('addBackpackedAttack', backpackedAttacks);
        } 
        
      });
    } else {
      console.error('Failed to fetch attacks');
    }
  } catch (error) {
    console.error('Error during attack fetch:', error);
    // Handle the error if needed
  }
});
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
          <div class="col">
          <div class="row">
              <div class="col rounded-column-2 text-center" style="background-color: #DECA91;">
              <h1>Sell an attack</h1>
              <div class="col">
                  <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
                    <h5>Select the attack you want to sell</h5>
                  <DropDownComponent  label="" dropdownId="dropdown" @attack-selected="handleSaveAttacks"></DropDownComponent>
                  </div>
                  <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
                  <div class="custom-button" style="background-color: #DECA91;">
                    <InputComponent label="Set a price" v-model="PriceVariable"
                                                :maxCharacters="21" @update:parentValue="handleInput2"></InputComponent>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </div>
      <div class="col-2">
          <div class="space_between">
          </div>
      </div>
      <div class="col">
          <div class="row">
          <div class="col-2 ">
              <div class="space_between">
              </div>
          </div>
          <div class="col-3 ">
              <div class="space_between">
              <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" :data-bs-target="data_bs_target" data-bs-toggle="modal"> <h4>Cancel</h4></button>
              </div>
          </div>
          <div class="col-2 ">
              <div class="space_between">
              </div>
          </div>
          <div class="col-3">
              <div class="space_between">
              <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" :data-bs-target="data_bs_target" data-bs-toggle="modal" @click="sellAttack"> <h4>Sell</h4></button>
              </div>
          </div>
          <div class="col-2 ">
              <div class="space_between">
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
      id: String,
      data_bs_target: String
    },
};
</script>