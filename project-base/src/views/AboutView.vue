<script setup>
import { RouterLink } from 'vue-router'
import myProfile from '../assets/images/avatar.jpg';
import { ref, onMounted, onBeforeUnmount } from 'vue';

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

<template>
 <div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    <header>
      <div class="col" style="padding: 0rem; ">
        <div class="row" style="padding: 0rem; ">
          <div class="col" :class="{'col-10': isSmallDevice, 'col-3': !isSmallDevice}" style="padding: 0rem; ">
            <div class="col rounded-column-2 text-center" style="background-color: #87CEEB; padding: 0rem; " >
              <div class="col" >
                <div class="row">
                  <div class="col-4 ">
                    <img :src="myProfile" style="min-width: 70px; min-height: 70px; border: 2px solid #1E1E1E;  border-radius: 10px;" class="img-fluid" alt="Profile Image">
                  </div>
                  <div class="col-8 ">
                     <div class="row">
                      <div class="col text-center">
                        <h8>User + lvl</h8>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar" style="width: 50%; background-color: #DFE232;" ></div>
                        </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
          </div>
      </div>
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
    </header>
<div class="col " :class="{'col-10': isSmallDevice, 'col-3': !isSmallDevice}" style="padding: 0rem;">
  
    <div class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
        <h8 >level X YYYxp</h8>
    </div>
    <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
      <h8 >Coins</h8>
  </div>
  </div>
  <div class="col-12 text-center" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
        <h1>Profile</h1>     
        </div>
      </div>  
</div>
    <div class="col" >
    <div class="row">
        <div class="col-2 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-8 ">
          <RouterLink to="/inventory" class="btn btn-success custom-button" style="background-color: #8C9A45;"> <h3>Inventory</h3></RouterLink>
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
          <RouterLink to="/viewlogs" class="btn btn-success custom-button" style="background-color: #8C9A45;" ><h3>View logs</h3></RouterLink>
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
          <RouterLink to="/deleteprofile" class="btn btn-success custom-button" style="background-color: #8C9A45;" ><h3>Delete Profile</h3></RouterLink>
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
              <RouterLink to="/home" class="btn btn-success custom-button" ><h4>return</h4></RouterLink>
            </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>   
    </div>

</template>

<style scoped>

</style>
