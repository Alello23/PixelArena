<script setup>
import { RouterLink } from 'vue-router'
import myProfile from '../assets/images/Kaos_Profile.webp';
</script>

<template>
 <div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    <header>
      <div class="col" style="padding: 0rem; ">
        <div class="row" style="padding: 0rem; ">
          <div class="col-3 " style="padding: 0rem; ">
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
      <div class="col-7 ">
        <div class="space_between" >
        </div>
    </div>
      <div class="col-2 text-center"  style="padding: 2rem;">
        <div class="space_between" >
            <button type="button" class="custom-button" style="background-color: #87CEEB;  border: none; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); "> <h4>BackLog</h4></button>
          </div>
     </div>
    </div>
  </div>
    </header>
<div class="col" style="padding: 0rem;">
    <div class="row" style="padding: 0rem;">
        <div class="col-3 " style="padding: 0rem;">
            <div class="space_between">
            </div>
            <div class="col text-center" style="padding: 0rem;">
              <RouterLink to="/profile" class="btn btn-success custom-button" style="background-color: #87CEEB; border: none; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2;" ><h3>Profile</h3></RouterLink>                    
             </div>
             <div class="space_between">
            </div>
            <div class="col rounded-column-1" style="background-color: #419FD6; border: 2px solid #1E1E1E;">
                <div class="col" style="padding: 0rem;">
                    <div class="space_between">
                    </div>
                 <div class="space_between">
                    <div class="col text-center" style="padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #87CEEB;  border: none; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2;"> <h3>Play</h3></button>
                 </div>
                 </div>
                 <div class="space_between">
                    <div class="col text-center" style="padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #87CEEB;  border: none; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2;"> <h3>Shop</h3></button>
                 </div>
                 </div>
                 <div class="space_between">
                    <div class="col text-center" style="padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #87CEEB;  border: none; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2;"> <h3>Inventory</h3></button>
                 </div>
               </div>
             </div>
             </div>
          </div> 
          <div class="col-7 ">
            <div class="col rounded-column-2" style="background-color: #DECA91;">
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
                  <RouterLink to="/playergamehistory" class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF; text-decoration: none;" >
                 
                    <div class="col-2 " style=" padding: 0rem;"> 
                      
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>#2</h4></button>    
                  </div>
                    <div class="col-7"  style=" padding: 0rem;">
                          <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Player512</h4></button>    
                  </div>
                  <div class="col-3"  style=" padding: 0rem;">
                        <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>96%</h4></button>     
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
            </div>
            </div>
            </div>
            <div class="col-2" >
                <div class="space_between">
                </div>
            </div>
    </div>
    <div class="col" >
        <div class="row">
         <div class="col-5 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-5 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-2">
            <div class="space_between" >
                <button type="button" class="custom-button" style="background-color: #FF0000;  border: none; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); color: white; "> <h4>Logout</h4></button>
              </div>
        </div>    
       </div>   
    </div>
 
</template>

<style scoped>

</style>