<script setup>
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';
import ViewLogsComponent from '../components/ViewLogsComponent.vue';
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
        <h1>Logs</h1>
     </div>
    </header>
<div class="col " style="padding: 0rem;">
  <div class="col-12" style="padding: 0rem; ">
    <div class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
        <h1 >Game Logs</h1>
    </div>
  </div> 
</div>
  <div class="col ">
    <div class="col" style=" max-height: 380px; overflow-y: scroll;"> 
      <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">    
        <ViewLogsComponent ></ViewLogsComponent>
      </div> 
      
    </div> 
</div>
   <div class="col" >
       <div class="row">
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-4">
            <div class="space_between" >
              <ButtonComponent_profile label="return" path="/profile" color=""></ButtonComponent_profile>
              </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>    
    </div>
</div>  
</template>

<style scoped>

</style>