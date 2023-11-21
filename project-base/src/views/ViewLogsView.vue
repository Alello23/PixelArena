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
        <div v-if="isSmallDevice">
          <div class="spacer_sides" >
          <button type="button" class="custom-button" style="background-color: #DECA91;"> <h2>Log Game 1</h2></button>
        </div>
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 2</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 3</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"> <h2>Log Game 4</h2></button>
        </div>
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 5</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 6</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"> <h2>Log Game 7</h2></button>
        </div>
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 8</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 9</h2> </button>
        </div> 
        </div>
        <div v-else>
          <div class="spacer_sides" >
          <button type="button" class="custom-button" style="background-color: #DECA91;"> <h2>Log Game 1</h2></button>
        </div>
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 2</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 3</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"> <h2>Log Game 4</h2></button>
        </div>
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 5</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 6</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"> <h2>Log Game 7</h2></button>
        </div>
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 8</h2> </button>
        </div> 
        <div class="spacer_sides">
          <button type="button" class="custom-button" style="background-color: #DECA91;"><h2>Log Game 9</h2> </button>
        </div> 
        </div>
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
</template>

<style scoped>

</style>