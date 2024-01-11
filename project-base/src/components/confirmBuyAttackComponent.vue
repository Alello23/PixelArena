<script setup>

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
                                <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
                                    <div style="border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); background-color: #87CEEB;"><h2>Are you sure you want to buy Attack1?</h2></div>
                                    <div class="space_between"></div> 
                                    <div class="confirmation-buttons d-flex justify-content-between">
                                        <ButtonComponent_profile label="Save Changes" path="/confirmation" color="#8C9A45"><h3>NO</h3></ButtonComponent_profile>
                                        <ButtonComponent_profile label="Save Changes" path="/confirmation" color="#8C9A45"><h3>YES</h3></ButtonComponent_profile>
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
                    </div>
                </div>
                </div>
</template>

<script>

export default {
    props: {
      id: String,
    },
};
</script>