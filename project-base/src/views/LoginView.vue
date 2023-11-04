<script setup>
import LoginBoxComponent from '../components/LoginBoxComponent.vue';
</script>

<template>
 <div class="container-fluid">
  <div class="row" id="box"></div>
  <div class="row justify-content-center">
    <div class="col-10 col-sm-8 col-md-6 col-lg-3" id="LoginBox">
      <LoginBoxComponent/> 
    </div>
  </div>
</div>
</template>

<style scoped>
.container-fluid{
  height: 100vh;
}
#box{
  height: 20vh;
}
</style>  