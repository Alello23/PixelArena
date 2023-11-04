<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
 <div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    <header>
      <div class="col text-center">
        <h1>Change equipped Attacks</h1>
     </div>
    </header>
<div class="col " style="padding: 0rem;">
  <div class="col-12" style="padding: 0rem; ">
    <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;" >
        <h1 >Equipped Attacks</h1>
    </div>
  </div> 
  <div class="col"> 
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <div class="custom-button"  style="background-color: #DECA91;">
            <button type="button" class="btn btn-danger dropdown-toggle" style="background-color: #DECA91; border: none;" data-bs-toggle="dropdown" aria-expanded="false">
                <h1 style="color: black;">Attack 3</h1>
            </button>
            <ul class="dropdown-menu dropdown-menu-right " >
                <li><a class="dropdown-item" href="#">Attack 1</a></li>
                <li><a class="dropdown-item" href="#">Attack 2</a></li>
                <li><a class="dropdown-item" href="#">Attack 3</a></li>
                <li><a class="dropdown-item" href="#">Attack 4</a></li>
                <li><a class="dropdown-item" href="#">Attack 5</a></li>
                <li><a class="dropdown-item" href="#">Attack 6</a></li>
                <li><a class="dropdown-item" href="#">Attack 7</a></li>
                <li><a class="dropdown-item" href="#">Attack 9</a></li>
                <li><a class="dropdown-item" href="#">Attack 10</a></li>
            </ul>
        </div>
      </div>
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <div class="custom-button"  style="background-color: #DECA91;">
            <button type="button" class="btn btn-danger dropdown-toggle" style="background-color: #DECA91; border: none;" data-bs-toggle="dropdown" aria-expanded="false">
                <h1 style="color: black;">Attack 6</h1>
            </button>
            <ul class="dropdown-menu dropdown-menu-right " >
                <li><a class="dropdown-item" href="#">Attack 1</a></li>
                <li><a class="dropdown-item" href="#">Attack 2</a></li>
                <li><a class="dropdown-item" href="#">Attack 3</a></li>
                <li><a class="dropdown-item" href="#">Attack 4</a></li>
                <li><a class="dropdown-item" href="#">Attack 5</a></li>
                <li><a class="dropdown-item" href="#">Attack 6</a></li>
                <li><a class="dropdown-item" href="#">Attack 7</a></li>
                <li><a class="dropdown-item" href="#">Attack 9</a></li>
                <li><a class="dropdown-item" href="#">Attack 10</a></li>
            </ul>
        </div>
      </div> 
      <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
        <div class="custom-button"  style="background-color: #DECA91;">
            <button type="button" class="btn btn-danger dropdown-toggle" style="background-color: #DECA91; border: none;" data-bs-toggle="dropdown" aria-expanded="false">
                <h1 style="color: black;">Attack 7</h1>
            </button>
            <ul class="dropdown-menu dropdown-menu-right" >
                <li><a class="dropdown-item" href="#">Attack 1</a></li>
                <li><a class="dropdown-item" href="#">Attack 2</a></li>
                <li><a class="dropdown-item" href="#">Attack 3</a></li>
                <li><a class="dropdown-item" href="#">Attack 4</a></li>
                <li><a class="dropdown-item" href="#">Attack 5</a></li>
                <li><a class="dropdown-item" href="#">Attack 6</a></li>
                <li><a class="dropdown-item" href="#">Attack 7</a></li>
                <li><a class="dropdown-item" href="#">Attack 9</a></li>
                <li><a class="dropdown-item" href="#">Attack 10</a></li>
            </ul>
        </div>
      </div> 
  </div> 
       <div class="col" >
       <div class="row">
        <div class="col-3 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-6">
            <div class="space_between" >
                <RouterLink to="/inventory" class="btn btn-success custom-button" style="background-color: #8C9A45;" ><h4>Save Changes</h4></RouterLink>
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
                <RouterLink to="/inventory" class="btn btn-success custom-button" style="background-color: #CF5454;" ><h4>Cancel</h4></RouterLink>
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
                <RouterLink to="/inventory" class="btn btn-success custom-button" style="background-color: #EAEAEA;" ><h4>return</h4></RouterLink>
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