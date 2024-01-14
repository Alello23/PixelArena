<script setup>
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';
import InputComponent from '../components/InputComponent.vue';
import { ref, onMounted, onBeforeUnmount, computed} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isSmallDevice = ref(false);
const gameName = ref('');
const storelogs = ref([]);
const LogSuccess = ref(null);

const showError = computed(() => LogSuccess.value === false);

const findGameLogs = async () => {
  try {
    const apiUrl = `https://balandrau.salle.url.edu/i3/arenas/${gameName.value}/logs`;
    const token = store.getters.getplayer.token;
    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {
      const currentlogs = await response.json();
      storelogs.value = currentlogs;
      LogSuccess.value = true;
    } else {
      console.error('Failed to fetch logs');
      LogSuccess.value = false;
    }
  } catch (error) {
    console.error('Error during logs fetch:');
    // Handle the error if needed
    LogSuccess.value = false;
  }
};

const checkScreenSize = () => {
  isSmallDevice.value = window.innerWidth < 768; // Adjust the threshold as needed
};

const handleInput1 = (value) => {
  gameName.value = value;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <div class="rounded-column-1" style="background-color: transparent; border: none;">
    <header>
      <div class="col text-center">
        <h1>Logs</h1>
      </div>
    </header>
    <div class="row">
      <article class="col-9">
        <div class="custom-button" style="background-color: #DECA91;">
          <InputComponent label="Enter the Game Name" v-model="gameName" :maxCharacters="20" @update:parentValue="handleInput1"></InputComponent>
        </div>
      </article>
      <article class="col-3">
        <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; 
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" @click="findGameLogs()"> <h4>View Logs</h4></button>
      </article>
      <div class="col">
        <div  v-if="showError" class="error-message"><h4>Failed to find Log</h4></div>
      </div>
    </div>
    <div class="col" style="padding: 0rem;">
      <article class="col-12" style="padding: 0rem; ">
        <div class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
          <h1>Game Logs</h1>
        </div>
      </article>
    </div>
    <div class="col">
      <main class="col" style="max-height: 380px; overflow-y: scroll;"> 
        <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">    
          <div v-for="storelog in storelogs" :key="storelog.playerID" class="space_between">
                                                <div class="row rounded-column-1" style="padding: 0rem; background-color: #DECA91; text-decoration: none;" :data-bs-target="buyConfirmation" data-bs-toggle="modal" @click="openBuyConfirmation(storeAttack)"> 
                                                <div class="col-2 " style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #DECA91; border: none;"><h4>{{ storelog.date_time }}</h4></button>
                                                </div>
                                                <div class="col-3" style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #DECA91; border: none;"><h4>{{ storelog.attack_ID }}</h4></button>
                                                </div>
                                                <div class="col-7" style="padding: 0rem;">
                                                    <button type="button" class="custom-button" style="background-color: #DECA91; border: none;"><h4>{{ storelog.description }}</h4></button>
                                                </div>
                                                </div>
                              </div>
        </div> 
      </main> 
    </div>
    <article class="col">
      <div class="row">
        <div class="col-4 ">
          <div class="space_between">
          </div>
        </div>
        <div class="col-4">
          <div class="space_between">
            <ButtonComponent_profile label="return" path="/profile" color=""></ButtonComponent_profile>
          </div>
        </div>
        <div class="col-4 ">
          <div class="space_between">
          </div>
        </div>
      </div>    
    </article>
  </div>  
</template>