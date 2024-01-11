<script setup>
import DropDownComponent from '../components/DropDownComponent.vue';
import AddData from './AddData.vue';
</script>
<template>
<div class="modal fade" tabindex="-1" :id="id">
  <div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="col self-align-center">
          <div class="col">
          <div class="row">
              <div class="col rounded-column-2 text-center" style="background-color: #DECA91;">
              <h1>Sell an attack</h1>
              <div class="col">
                  <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
                  <DropDownComponent>Select the attack you want to sell</DropDownComponent>
                  </div>
                  <div class="space_between" style="margin-right: 60px; margin-left: 60px;">
                  <div class="custom-button" style="background-color: #DECA91;">
                      <AddData placeholderText="Set a price" />
                  </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </div>
      <div class="col-2">
          <div class="space_between">
          </div>
      </div>
      <div class="col">
          <div class="row">
          <div class="col-2 ">
              <div class="space_between">
              </div>
          </div>
          <div class="col-3 ">
              <div class="space_between">
              <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" :data-bs-target="data_bs_target" data-bs-toggle="modal"> <h4>Cancel</h4></button>
              </div>
          </div>
          <div class="col-2 ">
              <div class="space_between">
              </div>
          </div>
          <div class="col-3">
              <div class="space_between">
              <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" :data-bs-target="data_bs_target" data-bs-toggle="modal"> <h4>Sell</h4></button>
              </div>
          </div>
          <div class="col-2 ">
              <div class="space_between">
              </div>
          </div>
          </div>
      </div>
      </div>
  </div>
  </div>
</div>
</template>

<script>

export default {
    props: {
      id: String,
      data_bs_target: String
    },
};
</script>