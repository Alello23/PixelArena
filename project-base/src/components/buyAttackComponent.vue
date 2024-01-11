<script setup>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

const store = useStore();
const storeAttacks = ref([]);

const openBuyConfirmation = (attack) => {
  // To set the selected storeAttack
  store.dispatch('selectStoreAttack', attack);
 
};

onMounted(async () => {
    try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks';
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
     const attacks = await response.json();
     storeAttacks.value = attacks.filter(att => att.on_sale);
  
    } else {
      console.error('Failed to fetch attacks');
    }
  } catch (error) {
    console.error('Error during attack fetch:', error);
    // Handle the error if needed :data-bs-target="buyConfirmation" data-bs-toggle="modal"
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
                    <section class="modal-body">
                        <div class="d-flex justify-content-center">
                                    <div class="col-10" style="padding: 0rem;">
                                        <div class="col rounded-column-2" style="background-color: #DECA91;">
                                            <div class="row" style="padding: 0rem;">
                                                <div class="col-2" style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #EAEAEA;"> <h4>€</h4></button>     
                                            </div>
                                                <div class="col-7" style="padding: 0rem;">                    
                                                    <button type="button" class="custom-button" style="background-color: #8C9A45;"> <h4>Name</h4></button>                        
                                            </div>
                                            <div class="col-3" style="padding: 0rem;">                  
                                                    <button type="button" class="custom-button" style="background-color: #6B8E9E;"> <h4>Power</h4></button>                      
                                            </div>
                                        </div> 
                                        <div class="row">
                                        <div class="col" style=" max-height: 375px;  max-width: 800px; overflow-y: scroll; padding: 2rem;"> 
                                           <div v-for="storeAttack in storeAttacks" :key="storeAttack.attack_ID" class="space_between">
                                                <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF; text-decoration: none;" :data-bs-target="buyConfirmation" data-bs-toggle="modal" @click="openBuyConfirmation(storeAttack)"> 
                                                <div class="col-2 " style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #C0D6DF; border: none;"><h4>{{ storeAttack.price }}</h4></button>
                                                </div>
                                                <div class="col-7" style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #C0D6DF; border: none;"><h4>{{ storeAttack.attack_ID }}</h4></button>
                                                </div>
                                                <div class="col-3" style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #C0D6DF; border: none;"><h4>{{ storeAttack.power }}</h4></button>
                                                </div>
                                                </div>
                              </div>
                             </div>
                            </div>
                         </div>
                        </div>
                    </div>
                    </section>
                    <footer class="modal-footer">
                        <button type="button" class="btn btn-secondary" :data-bs-target="data_bs_target" data-bs-toggle="modal">Back</button>
                    </footer>
                    </div>
                    </div>
                    </div>
</template>

<script>

export default {
    props: {
      id: String,
      data_bs_target: String,
      buyConfirmation: String
    },
};
</script>