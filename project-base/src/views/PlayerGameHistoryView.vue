<script setup>
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';
import PlayerProfileComponent from '../components/PlayerProfileComponent.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isSmallDevice = ref(false);
const selectedProfile = store.getters.getSearchedplayer;
console.log('Selected player:', selectedProfile.player_ID);

const checkScreenSize = () => {
  isSmallDevice.value = window.innerWidth < 768; // Adjust the threshold as needed
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
<div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    <header>
      <div class="col text-center">
        <h1>Player Profile</h1>
     </div>
    </header>
<section class="col " style="padding: 0rem;">
    <div class="row" :class="{ 'isSmallDevice': isSmallDevice }" style="padding: 0rem;">
        <div class="col" :class="{'col-12': isSmallDevice, 'col-6': !isSmallDevice}" style="padding: 0rem; ">
            <article class="col rounded-column-2 text-center" style="background-color: #6B8E9E;" >
                <h1 >Player information</h1>
            </article>
          </div> 
          <div class="col-6" v-if="!isSmallDevice" style="padding: 0rem; ">
            <article class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
                <h1 >Finished games</h1>
            </article>
          </div>
    </div>
  
</section>
  <main class="col" :class="{ 'isSmallDevice': isSmallDevice }" style="padding: 0rem; ">
    <div class="row" :class="{ 'isSmallDevice': isSmallDevice }" style="padding: 0rem; ">
        <div class="col" :class="{'col-12': isSmallDevice, 'col-6': !isSmallDevice}"  style="border: 5px solid #1E1E1E;">
            <div class="space_between">
              <div class="rounded-column-2 text-center" style="background-color: #8C9A45;" >
                 <h8 >{{ selectedProfile.player_ID }}</h8>
              </div>
            </div>
              <div class="space_between">
                <div class="rounded-column-2 text-center" style="background-color: #8C9A45;" >
                 <h8 >{{ selectedProfile.xp }} xp</h8>
              </div>
              </div> 
              <div class="space_between">
                <div class="rounded-column-2 text-center" style="background-color: #8C9A45;" >
                 <h8 >{{ selectedProfile.coins }} coins</h8>
              </div>
              </div> 
        </div>
        <div class="col-6" v-if="!isSmallDevice" style="border: 5px solid #1E1E1E;">
          <PlayerProfileComponent></PlayerProfileComponent>     
        </div>

    </div>
    <div class="row">
      <div class="col-12" v-if="isSmallDevice" style="padding: 0rem; ">
            <div class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
                <h1 >Finished games</h1>
            </div>
          </div>
    </div>
    <div class="row">
      <div class="col-12" v-if="isSmallDevice" style="border: 5px solid #1E1E1E;">
        <PlayerProfileComponent></PlayerProfileComponent> 
        </div>
    </div>
</main>
   <section class="col" >
       <div class="row">
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-4">
            <div class="space_between" >
                <ButtonComponent_profile label="return" path="/home" color=""></ButtonComponent_profile>
              </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>    
    </section>
</div>
</template>