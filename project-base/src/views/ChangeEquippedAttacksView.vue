<script setup>
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';
import DropDownComponent from '../components/DropDownComponent.vue';
import ButtonComponent_information from '../components/ButtonComponent_information.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const selectedAttacks = ref({
  dropdown1: null,
  dropdown2: null,
  dropdown3: null,
});

const handleSaveAttacks = (payload) => {
  console.log('Selected Attack Payload:', payload);
  // Access payload.dropdownId and payload.attack here
  const { dropdownId, attack } = payload;

  // Update the selectedAttacks variable based on which dropdown emitted the payload
  selectedAttacks.value[dropdownId] = attack;
};
const SaveAttacks = async () =>{

  const TransferdAttack1 = store.getters.getSelectedAttack('dropdown1');
  const TransferdAttack2 = store.getters.getSelectedAttack('dropdown2'); 
  const TransferdAttack3 = store.getters.getSelectedAttack('dropdown3');

  // Update the store with the selected attacks
  const { dropdown1, dropdown2, dropdown3 } = selectedAttacks.value;

  
  // Dispatch the selectAttack action for each dropdown
  if (dropdown1 !== null) {
    // Only dispatch if an attack is selected
    // The payload is an object with dropdown and attack properties
    // Modify this based on your store structure
    store.dispatch('selectAttack', { dropdown: 'dropdown1', attack: dropdown1 });
    if(TransferdAttack1 !== null){
      await deleteAttackFromAPI(TransferdAttack1);
    }

      await sendAttacksToAPI(dropdown1);

    // If the attack is found, delete it from the backpackedAttacks
  }

  if (dropdown2 !== null) {
    
    store.dispatch('selectAttack', { dropdown: 'dropdown2', attack: dropdown2 });
    // If the attack is found, delete it from the backpackedAttacks
    if(TransferdAttack2 !== null){
      await deleteAttackFromAPI(TransferdAttack2);
    }
      await sendAttacksToAPI(dropdown2);
  }

  if (dropdown3 !== null) {
    
    store.dispatch('selectAttack', { dropdown: 'dropdown3', attack: dropdown3 });
    // If the attack is found, delete it from the backpackedAttacks
    if(TransferdAttack3 !== null){
      await deleteAttackFromAPI(TransferdAttack3);
    }
      await sendAttacksToAPI(dropdown3);
   
  }
  console.log('Save Attack:', selectedAttacks.value);
};
const deleteAttackFromAPI = async (attackId) => {
  try {
    const apiUrl = `https://balandrau.salle.url.edu/i3/players/attacks/${attackId.attack_ID}`;
    const token = store.getters.getplayer.token;
    console.log('Attack send to Delete:', attackId.attack_ID);
    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'DELETE', // Assuming you want to perform a POST request
      headers: headers,
      // Add any additional data in the body if needed
      // body: JSON.stringify({ /* your data */ }),
    });

    if (response.ok) {
      console.log(`Attack deleted successfully: ${apiUrl}`);
    } else {
      console.error(`Failed to delete Attack: ${apiUrl}`);
      // Handle the error if needed
    }
  } catch (error) {
    console.error('Error during attack deletion:', error);
    // Handle the error if needed
  }
};
const sendAttacksToAPI = async (dropdown) => {
  try {
    const apiUrl = `https://balandrau.salle.url.edu/i3/players/attacks/${dropdown.attack_ID}`;
    const token = store.getters.getplayer.token;
    console.log('Attack send to equip:', dropdown.attack_ID);
    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };
    const response = await fetch(apiUrl, {
      method: 'POST', // Assuming you want to perform a POST request
      headers: headers,
      // Add any additional data in the body if needed
      // body: JSON.stringify({ /* your data */ }),
    });

    if (response.ok) {
      console.log(`Attack updated successfully: ${apiUrl}`);
      router.push('/inventory'); // Redirect to the inventory page or another page
    } else {
      console.error(`Failed to update Attack: ${apiUrl}`);
      // Handle the error if needed
    }
  } catch (error) {
    console.error('Error during attack update:', error);
    // Handle the error if needed
  }
};
  
</script>

<template>
 <div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    <header>
      <div class="col text-center">
        <h1>Change equipped Attacks</h1>
     </div>
    </header>
<div class="col " style="padding: 0rem;">
  <article class="col-12" style="padding: 0rem; ">
    <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;" >
        <h1 >Equipped Attacks</h1>
    </div>
  </article> 
  <main class="col"> 
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <DropDownComponent label="Attack 3" dropdownId="dropdown1" @attack-selected="handleSaveAttacks"></DropDownComponent>
      </div>
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <DropDownComponent label="Attack 6" dropdownId="dropdown2" @attack-selected="handleSaveAttacks"></DropDownComponent>
      </div> 
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <DropDownComponent label="Attack 7" dropdownId="dropdown3" @attack-selected="handleSaveAttacks"></DropDownComponent>
      </div> 
  </main> 
       <section class="col" >
       <div class="row">
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-6">
            <div class="space_between">
                <ButtonComponent_information label="Save Changes" color="#8C9A45" @click="SaveAttacks"></ButtonComponent_information>
              </div>
        </div>
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
       </div>  
       <div class="row">
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-6">
            <div class="space_between" >
              <ButtonComponent_profile label="Cancel" path="/inventory" color="#CF5454" ></ButtonComponent_profile>
              </div>
        </div>
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
       </div>  
       <div class="row">
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-4">
            <div class="space_between" >
                <ButtonComponent_profile label="return" path="/inventory" color=""></ButtonComponent_profile>
              </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>    
    </section>
</div>
</div> 
</template>