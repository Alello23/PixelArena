<script setup>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const storeSearchedplayers= ref([]);
const router = useRouter();

const openPlayerProfile = (storeSearchedplayer) => {
  // To set the selected storeAttack
  store.dispatch('selectSearchedplayer', storeSearchedplayer);
  console.log('Selected player:', storeSearchedplayer.player_ID);
  router.push('/playergamehistory');
 
};

onMounted(async () => {
    try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players';
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
     const players = await response.json();
     storeSearchedplayers.value = players
    } else {
      console.error('Failed to fetch players');
    }
  } catch (error) {
    console.error('Error during player fetch:', error);
    // Handle the error if needed :data-bs-target="buyConfirmation" data-bs-toggle="modal"
  }
});

</script>

<template>
    <div class="modal fade" tabindex="-1" id="LeaderBoard" aria-labelledby="test" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
        <div class="modal-body">
                <div class="row">
                    <div class="col-2" style="padding: 0rem;">
                          <button type="button" class="custom-button" style="background-color: #EAEAEA;"> <h4>XP</h4></button>     
                  </div>
                    <div class="col-7" style="padding: 0rem;">                    
                          <button type="button" class="custom-button" style="background-color: #8C9A45;"> <h4>Name</h4></button>                        
                  </div>
                  <div class="col-3" style="padding: 0rem;">                  
                        <button type="button" class="custom-button" style="background-color: #6B8E9E;"> <h4>Coins</h4></button>                      
                </div>
             </div> 
             <div class="row">
              <div class="col" style=" max-height: 375px; overflow-y: scroll; padding: 4rem;"> 
                <div class="space_between" >
                <div v-for="storeSearchedplayer in storeSearchedplayers" :key="storeSearchedplayer.player_ID" class="space_between">
                                                <div class="row rounded-column-1" data-bs-dismiss="modal" style="padding: 0rem; background-color: #C0D6DF; text-decoration: none;" @click="openPlayerProfile(storeSearchedplayer)"> 
                                                <div class="col-2 " style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #C0D6DF; border: none;"><h4>{{ storeSearchedplayer.xp }}</h4></button>
                                                </div>
                                                <div class="col-7" style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #C0D6DF; border: none;"><h4>{{ storeSearchedplayer.player_ID }}</h4></button>
                                                </div>
                                                <div class="col-3" style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #C0D6DF; border: none;"><h4>{{ storeSearchedplayer.coins }}</h4></button>
                                                </div>
                                                </div>
                              </div>
                </div>
                  </div> 
                </div>
                <div class="row">
                  <div class="space_between" ></div>
                </div>
            </div> 
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
</template>

<style>
.modal-content{
    background-color: #DECA91;
    border-color: black;
    border-width: 0.5rem;
}
</style>