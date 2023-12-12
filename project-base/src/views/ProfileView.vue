<script setup>
import UserCardComponent from '../components/UserCardComponent.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';

const isSmallDevice = ref(false);

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
<script>
export default {
  computed: {
    // Change profile to a computed property
    profile() {
      return this.profileValue;
    },
  },
  methods: {
    // Change getplayerFromStore to use getters
    getplayerFromStore() {
      // Use the store to get the player value
      const profile = this.$store.getters.getplayer;
      return profile ? profile : null;
    },
  },
  data() {
    return {
      // Set profileValue to the player object
      profileValue: this.getplayerFromStore(),
    };
  },
};
</script>

<template>
  <header>
 <div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    
      <div class="col" style="padding: 0rem; ">
        <div class="row" style="padding: 0rem; ">
    
          <article class="col" :class="{'col-10': isSmallDevice, 'col-3': !isSmallDevice}" style="padding: 0rem; ">
            <UserCardComponent></UserCardComponent>
      </article>
  
      <div class="col text-center" :class="{'col-1': isSmallDevice, 'col-6': !isSmallDevice}">
        <div v-if="!isSmallDevice">
        <h1>Profile</h1>     
        </div>
      </div> 
     <div class="col" :class="{'col-1': isSmallDevice, 'col-3': !isSmallDevice}">
      <div class="space_between" >
      </div>
  </div>
    </div>
  </div>
<div class="col " :class="{'col-10': isSmallDevice, 'col-3': !isSmallDevice}" style="padding: 0rem;">
  
    <div class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
        <h8 >level {{ profileValue.level }} {{ profileValue.xp }}xp</h8>
    </div>
    <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
      <h8 >{{ profileValue.coins }} Coins</h8>
  </div>
  </div>
  <div class="col-12 text-center" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
        <h1>Profile</h1>     
        </div>
      </div>  
</div>
</header>
<main>
    <div class="col" >
    <div class="row">
        <div class="col-2 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-8 ">
          <ButtonComponent_profile label="Inventory" path="/inventory" color="#8C9A45"></ButtonComponent_profile>
        </div>
        <div class="col-2 ">
            <div class="space_between" >
            </div>
        </div>       
       </div> 
       <div class="row">
        <div class="col-2 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-8 ">
          <ButtonComponent_profile label="View logs" path="/viewlogs" color="#8C9A45"></ButtonComponent_profile>
        </div>
        <div class="col-2 ">
            <div class="space_between" >
            </div>
        </div>       
       </div> 
       <div class="row">
        <div class="col-2 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-8 ">
          <ButtonComponent_profile label="Delete Profile" path="profile/deleteprofile" color="#8C9A45"></ButtonComponent_profile>
        </div>
        <div class="col-2 ">
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
              <ButtonComponent_profile label="return" path="/home" color=""></ButtonComponent_profile>
            </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>   
    </div>
  </main>

</template>

<style scoped>

</style>
