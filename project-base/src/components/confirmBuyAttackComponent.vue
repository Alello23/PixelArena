<script setup>
import ButtonComponent_information from '../components/ButtonComponent_information.vue';
import { useStore } from 'vuex';

const store = useStore();

const buyAttack = async () => {
  try {
    const selectedStoreAttack = store.getters.getSelectedStoreAttack;
    const apiUrl = `https://balandrau.salle.url.edu/i3/shop/attacks/${selectedStoreAttack.attack_ID}/buy`;
    const token = store.getters.getplayer.token;
    console.log('Attack send to equip:', selectedStoreAttack.attack_ID);
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
      console.log(`Attack bought successfully`);
    } else {
      console.error(`Failed to buy Attack`);
      // Handle the error if needed
    }
  } catch (error) {
    console.error('Error during attack purchase');
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
                            <div class="col">
                                <div class="row">
                                <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
                                    <div style="border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); background-color: #87CEEB;"><h2>Are you sure you want to buy Attack1?</h2></div>
                                    <div class="space_between"></div> 
                                    <div class="confirmation-buttons d-flex justify-content-between">
                                        <ButtonComponent_information label="No" :data-bs-target="data_bs_target" data-bs-toggle="modal" color="#CF5454"></ButtonComponent_information>
                                        <ButtonComponent_information label="Yes" data-bs-dismiss="modal" color="#8C9A45" @click="buyAttack()"></ButtonComponent_information>
                                    </div>    
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