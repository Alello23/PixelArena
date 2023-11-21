<script setup>
import { RouterLink } from 'vue-router'
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
      <div class="col text-center">
        <h1>Delete Profile</h1>
     </div>
    </header>
<div class="col " style="padding: 0rem;">
  <div class="col-12" style="padding: 0rem; ">
    <div class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
        <h1 > Profile </h1>
    </div>
  </div> 
  <div class="col"> 
    <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
          <div class="space_between" style="margin-right:5px; margin-left: 5px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"> <h4>User</h4></button>
      </div>
        </div>
        <div v-else>
          <div class="space_between" style="margin-right:260px; margin-left: 260px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"> <h4>User</h4></button>
      </div>
        </div>
      </div> 
      <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
          <div class="space_between" style="margin-right:5px; margin-left: 5px;">
        <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>level X YYYxp</h4> </button>
      </div>
        </div>
        <div v-else>
          <div class="space_between" style="margin-right:260px; margin-left: 260px;">
        <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>level X YYYxp</h4> </button>
      </div>
        </div>
      </div> 
      <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
          <div class="space_between" style="margin-right:5px; margin-left: 5px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>Coins</h4> </button>
      </div>
        </div>
        <div v-else>
          <div class="space_between" style="margin-right:260px; margin-left: 260px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>Coins</h4> </button>
      </div>
        </div>
      </div> 
  </div> 
  <div class="col-12" style="padding: 0rem; " >
    <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;" >
        <h2 >Are you sure you want to delete your profile?</h2>
    </div>
     </div> 
     <div class="col" >
        <div class="row">
            <div class="col-2 ">
                <div class="space_between" >
                </div>
            </div>
            <div class="col-3 ">
                <div class="space_between" >
                    <RouterLink to="/" class="btn btn-success custom-button" style="background-color: #8C9A45;" ><h4>Yes</h4></RouterLink>
                  </div>
            </div>
            <div class="col-2 ">
                <div class="space_between" >
                </div>
            </div>
            <div class="col-3">
                <div class="space_between" >
                    <RouterLink to="/profile" class="btn btn-success custom-button" style="background-color: #CF5454;" ><h4>No</h4></RouterLink>
                  </div>
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
                <RouterLink to="/profile" class="btn btn-success custom-button" style="background-color: #EAEAEA;" ><h4>return</h4></RouterLink>
              </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>    
    </div>
</div>
</div>
</template>

<style scoped>

</style>