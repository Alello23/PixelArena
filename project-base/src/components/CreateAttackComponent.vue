<script setup>
import DropDownShopComponent from '../components/DropDownShopComponent.vue';
import AddData from './AddData.vue';
</script>

<template>
  <div class="modal fade" tabindex="-1" id="createAttack">
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
  <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <div class="col self-align-center">
            <div class="col" >
                <div class="row">
                  <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
                    <h1>Create attack</h1>
                    <div class="col"> 
                      <div class="space_between" style="margin-right: 60px; margin-left: 60px; ">
                        <div class="custom-button"  style="background-color: #DECA91;">
                          <AddData placeholderText="Add name to the attack" />
                        </div>
                      </div>
                      <div class="space_between" style="margin-right: 200px; margin-left: 200px; ">
                          <DropDownShopComponent label="Position"></DropDownShopComponent>
                      </div> 
                  </div> 
                </div>
                </div>
            </div>
            </div>
            <div class="col-2" >
                <div class="space_between">
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
                          <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#shop" data-bs-toggle="modal"> <h4>Cancel</h4></button>
                        </div>
                  </div>
                  <div class="col-2 ">
                      <div class="space_between" >
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="space_between" >
                          <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#shop" data-bs-toggle="modal"> <h4>Create</h4></button>
                        </div>
                  </div>
                  <div class="col-2 ">
                      <div class="space_between" >
                      </div>
                  </div>
             </div> 
    </div>
</div>
  </div>
</div>

</div>
</template>