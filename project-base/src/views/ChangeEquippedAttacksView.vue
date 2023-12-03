<script setup>
import ButtonComponent_profile from '../components/ButtonComponent_profile.vue';
import DropDownComponent from '../components/DropDownComponent.vue';
import ButtonComponent_save from '../components/ButtonComponent_save.vue';
</script>

<template>
 <div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    <header>
      <div class="col text-center">
        <h1>Change equipped Attacks</h1>
     </div>
    </header>
<div class="col " style="padding: 0rem;">
  <article class="col-12" style="padding: 0rem; ">
    <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;" >
        <h1 >Equipped Attacks</h1>
    </div>
  </article> 
  <main class="col"> 
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <DropDownComponent label="Attack 3"></DropDownComponent>
      </div>
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <DropDownComponent label="Attack 6"></DropDownComponent>
      </div> 
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <DropDownComponent label="Attack 7"></DropDownComponent>
      </div> 
  </main> 
       <section class="col" >
       <div class="row">
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-6">
            <div class="space_between">
                <ButtonComponent_save label="Save Changes" path="/inventory" color="#8C9A45"></ButtonComponent_save>
              </div>
        </div>
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
       </div>  
       <div class="row">
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-6">
            <div class="space_between" >
                <ButtonComponent_profile label="Cancel" path="/inventory" color="#CF5454"></ButtonComponent_profile>
              </div>
        </div>
        <div class="col-3 ">
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
                <ButtonComponent_profile label="return" path="/inventory" color=""></ButtonComponent_profile>
              </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>    
    </section>
</div>
</div> 
</template>