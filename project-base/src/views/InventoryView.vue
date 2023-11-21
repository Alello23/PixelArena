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
        <h1>Inventory</h1>
     </div>
    </header>
<div class="col"  :class="{ 'isSmallDevice': isSmallDevice }" >
  <div class="col" v-if="isSmallDevice">
    <div class="col" style="padding: 0rem;">
      <div class="space_between" style="margin-bottom: 15px;" >
        <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
            <h4 > Backpacked Attacks </h4>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem; margin-right: 30px;
  margin-left: 30px;">
            <h5 >Attack 1</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E; padding: 0.5rem; margin-right: 30px;
  margin-left: 30px;">
          <h5 >Attack 2</h5>
        </div>
    </div>
           <div class="space_between">
            <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E; padding: 0.5rem; margin-right: 30px;
  margin-left: 30px; ">
        <h5 >Attack 4</h5>
      </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem; margin-right: 30px;
  margin-left: 30px; ">
            <h5 >Attack 5</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem; margin-right: 30px;
  margin-left: 30px;">
            <h5 >Attack 8</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem; margin-right: 30px;
  margin-left: 30px;">
            <h5 >Attack 9</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem; margin-right: 30px;
  margin-left: 30px;">
            <h5 >Attack 10</h5>
        </div>
      </div>
      <div class="space_between" style="margin-bottom: 60px;"> </div>
   </div>
   
   <div class="col" style="padding: 0rem;">
        <div class="space_between">
          <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
              <h4 > Equipped attacks </h4>
          </div>
        </div>
        <div class="space_between" style="margin-right: 30px; margin-left: 30px;">
          <div class="col rounded-column-2 text-center">
              <h5 >Attack 3</h5>
          </div>
        </div>
        <div class="space_between" style="margin-right: 30px; margin-left: 30px;">
          <div class="col rounded-column-2 text-center">
            <h5 >Attack 6</h5>
          </div>
      </div>
             <div class="space_between" style="margin-right: 30px; margin-left: 30px;">
              <div class="col rounded-column-2 text-center">
          <h5 >Attack 7</h5>
        </div>
        </div>
     </div>
     <div class="col"> 
    <div class="spacer" style="height: 60px;"></div>
    <div class="col">
      <div class="space_between">
        <RouterLink to="/changeequippedattacks" class="btn btn-success custom-button" style="background-color: #8C9A45;" ><h4>Change equipped atacks</h4></RouterLink>
      </div>
      <div class="space_between">
        <RouterLink to="/profile" class="btn btn-success custom-button" style="background-color: #EAEAEA;" ><h4>return</h4></RouterLink>
      </div>

    </div> 
  </div> 



</div>
<div class="row" v-else >
  <div class="col-3" style="padding: 0rem;">
    <div class="spacer"></div>
    <div class="col rounded-column-1" >
       <div class="col" style="padding: 0rem;">
        <div class="space_between">
          <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
              <h4 > Equipped attacks </h4>
          </div>
        </div>
        <div class="space_between">
          <div class="col rounded-column-2 text-center">
              <h5 >Attack 3</h5>
          </div>
        </div>
        <div class="space_between">
          <div class="col rounded-column-2 text-center">
            <h5 >Attack 6</h5>
          </div>
      </div>
             <div class="space_between">
              <div class="col rounded-column-2 text-center">
          <h5 >Attack 7</h5>
        </div>
        </div>
     </div>
    </div>
  </div> 
  <div class="col"> 
    <div class="spacer" style="height: 560px;"></div>
    <div class="col">
      <div class="space_between">
        <RouterLink to="/changeequippedattacks" class="btn btn-success custom-button" style="background-color: #8C9A45;" ><h4>Change equipped atacks</h4></RouterLink>
      </div>
      <div class="space_between">
        <RouterLink to="/profile" class="btn btn-success custom-button" style="background-color: #EAEAEA;" ><h4>return</h4></RouterLink>
      </div>

    </div> 
  </div> 
  <div class="col-4" style="padding: 0rem;">
     <div class="spacer" style="height: 120px;" ></div>
  <div class="col rounded-column-1" >
     <div class="col" style="padding: 0rem;">
      <div class="space_between" style="margin-bottom: 15px;" >
        <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
            <h4 > Backpacked Attacks </h4>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem;">
            <h5 >Attack 1</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E; padding: 0.5rem;">
          <h5 >Attack 2</h5>
        </div>
    </div>
           <div class="space_between">
            <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E; padding: 0.5rem;">
        <h5 >Attack 4</h5>
      </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem;">
            <h5 >Attack 5</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem;">
            <h5 >Attack 8</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem;">
            <h5 >Attack 9</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;  padding: 0.5rem;">
            <h5 >Attack 10</h5>
        </div>
      </div>
   </div>
  </div></div> 
</div>


</div>
</div> 
</template>

<style scoped>

</style>