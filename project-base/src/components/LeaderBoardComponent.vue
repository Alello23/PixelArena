<script setup>
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
    <div class="modal fade" tabindex="-1" id="LeaderBoard" aria-labelledby="test" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
        <div class="modal-body">
                <div class="row">
                  <div class="col" >
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search Player" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search Player</button>
                      </form>
                </div>
                </div>
                <div class="row">
                    <div class="col-2 ">
                          <button type="button" class="custom-button" style="background-color: #EAEAEA;"> <h4>Rank</h4></button>     
                  </div>
                    <div class="col-7">                    
                          <button type="button" class="custom-button" style="background-color: #8C9A45;"> <h4>Name</h4></button>                        
                  </div>
                  <div class="col-3">                  
                        <button type="button" class="custom-button" style="background-color: #6B8E9E;"> <h4>Winrate</h4></button>                      
                </div>
             </div> 
             <div class="row">
              <div class="col" style=" max-height: 375px; overflow-y: scroll; padding: 4rem;"> 
                <div class="space_between" >
                  <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" >
                    <div class="col-2 " style=" padding: 0rem;"> 
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>#1</h4></button>    
                  </div>
                    <div class="col-7"  style=" padding: 0rem;">
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Alello23</h4></button>    
                  </div>
                  <div class="col-3"  style=" padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>98%</h4></button>     
                </div>
                  </div> 
                </div>
                <div class="space_between" >
                  <RouterLink to="/playergamehistory" class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF; text-decoration: none;">
                 
                  <div class="col-2 " style=" padding: 0rem;"> 
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;" data-bs-dismiss="modal"> <h4>#2</h4></button>    
                  </div>
                    <div class="col-7"  style=" padding: 0rem;">
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;" data-bs-dismiss="modal"> <h4>Player512</h4></button>    
                  </div>
                  <div class="col-3"  style=" padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;" data-bs-dismiss="modal"> <h4>96%</h4></button>     
                  </div>
                </RouterLink>
                </div>
                <div class="space_between" >
                  <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" >
                    <div class="col-2 " style=" padding: 0rem;"> 
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>#3</h4></button>    
                  </div>
                    <div class="col-7"  style=" padding: 0rem;">
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Player72</h4></button>    
                  </div>
                  <div class="col-3"  style=" padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>92%</h4></button>     
                </div>
                  </div> 
                </div>
                <div class="space_between" >
                  <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" >
                    <div class="col-2 " style=" padding: 0rem;"> 
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>#4</h4></button>    
                  </div>
                    <div class="col-7"  style=" padding: 0rem;">
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Player7</h4></button>    
                  </div>
                  <div class="col-3"  style=" padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>91%</h4></button>     
                </div>
                  </div> 
                </div>
                <div class="space_between" >
                  <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" >
                    <div class="col-2 " style=" padding: 0rem;"> 
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>#124</h4></button>    
                  </div>
                    <div class="col-7"  style=" padding: 0rem;">
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Alejandro</h4></button>    
                  </div>
                  <div class="col-3"  style=" padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>36%</h4></button>     
                </div>
                  </div> 
                </div>
                  </div> 
                </div>
                <div class="row">
                  <div class="space_between" ></div>
                </div>
            </div> 
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
</template>

<style>
.modal-content{
    background-color: #DECA91;
    border-color: black;
    border-width: 0.5rem;
}
</style>