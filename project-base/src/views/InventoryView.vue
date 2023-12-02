<script setup>
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';
import BackpackedAttacks from '../components/BackpackedAttacks.vue';
import EquippedAttacks from '../components/EquippedAttacks.vue';
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
        <h1>Inventory</h1>
     </div>
    </header>
<div class="col"  :class="{ 'isSmallDevice': isSmallDevice }" >
  <div class="col" v-if="isSmallDevice">
    <aside class="col" style="padding: 0rem;">
      <BackpackedAttacks margins="30px" ></BackpackedAttacks>  
   </aside>
   
   <aside class="col" style="padding: 0rem;">
    <EquippedAttacks margins="30px" ></EquippedAttacks>  
     </aside>
     <div class="col"> 
    <div class="spacer" style="height: 60px;"></div>
    <section class="col">
      <div class="space_between">
        <ButtonComponent_profile label="Change equipped atacks" path="/changeequippedattacks" color="#8C9A45"></ButtonComponent_profile>
      </div>
      <div class="space_between">
        <ButtonComponent_profile label="return" path="/profile" color=""></ButtonComponent_profile>
      </div>

    </section> 
  </div> 
</div>
<div class="row" v-else >
  <div class="col-3" style="padding: 0rem;">
    <div class="spacer"></div>
    <div class="col rounded-column-1" >
       <aside class="col" style="padding: 0rem;">
        <EquippedAttacks margins="0px" ></EquippedAttacks> 
     </aside>
    </div>
  </div> 
  <div class="col"> 
    <div class="spacer" style="height: 560px;"></div>
    <section class="col">
      <div class="space_between">
        <ButtonComponent_profile label="Change equipped atacks" path="/changeequippedattacks" color="#8C9A45"></ButtonComponent_profile>
      </div>
      <div class="space_between">
        <ButtonComponent_profile label="return" path="/profile" color=""></ButtonComponent_profile>
      </div>

    </section> 
  </div> 
  <div class="col-4" style="padding: 0rem;">
     <div class="spacer" style="height: 120px;" ></div>
  <div class="col rounded-column-1" >
     <aside class="col" style="padding: 0rem;">
      <BackpackedAttacks margins="0px" ></BackpackedAttacks>  
   </aside>
  </div></div> 
</div>


</div>
</div> 
</template>

<style scoped>

</style>