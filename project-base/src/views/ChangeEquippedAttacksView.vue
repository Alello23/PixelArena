<script setup>
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';
import DropDownComponent from '../components/DropDownComponent.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();

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
const SaveAttacks = () => {

  const TransferdAttack1 = store.getters.getSelectedAttack('dropdown1');
  const TransferdAttack2 = store.getters.getSelectedAttack('dropdown2');
  const TransferdAttack3 = store.getters.getSelectedAttack('dropdown3');

  // Update the store with the selected attacks
  const { dropdown1, dropdown2, dropdown3 } = selectedAttacks.value;

  if (TransferdAttack1 !== null){
    store.dispatch('addBackpackedAttack', TransferdAttack1);
  }
  if (TransferdAttack2 !== null){
    store.dispatch('addBackpackedAttack', TransferdAttack2);
  }
  if (TransferdAttack3 !== null){
    store.dispatch('addBackpackedAttack', TransferdAttack3);
  }

  

  // Dispatch the selectAttack action for each dropdown
  if (dropdown1 !== null) {
    // Only dispatch if an attack is selected
    // The payload is an object with dropdown and attack properties
    // Modify this based on your store structure
    store.dispatch('selectAttack', { dropdown: 'dropdown1', attack: dropdown1 });
    const index = store.state.backpackedAttacks.findIndex((a) => a.name === dropdown1.name);
    console.log('Index and attack name:', index, dropdown1.name);
    // If the attack is found, delete it from the backpackedAttacks
    if (index !== -1) {
      store.dispatch('deleteBackpackedAttack', index);
    }
  }

  if (dropdown2 !== null) {
    store.dispatch('selectAttack', { dropdown: 'dropdown2', attack: dropdown2 });
    const index = store.state.backpackedAttacks.findIndex((a) => a.name === dropdown2.name);
    console.log('Index and attack name:', index, dropdown2.name);
    // If the attack is found, delete it from the backpackedAttacks
    if (index !== -1) {
      store.dispatch('deleteBackpackedAttack', index);
    }
  }

  if (dropdown3 !== null) {
    store.dispatch('selectAttack', { dropdown: 'dropdown3', attack: dropdown3 });
    const index = store.state.backpackedAttacks.findIndex((a) => a.name === dropdown3.name);
    console.log('Index and attack name:', index, dropdown3.name);
    // If the attack is found, delete it from the backpackedAttacks
    if (index !== -1) {
      store.dispatch('deleteBackpackedAttack', index);
    }
  }
  console.log('Save Attack:', selectedAttacks.value);
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
                <ButtonComponent_profile label="Save Changes" path="/inventory" color="#8C9A45" @click="SaveAttacks"></ButtonComponent_profile>
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