<template>
    <div class="modal fade" tabindex="-1" id="shop">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">            
            <div class="col" >
                <div class="row">
                <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
                    <h1>Shop</h1>
                    <div class="space_between"></div> 
                    <button type="button" class="custom-button" style="background-color: #419FD6; border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#createAttack" data-bs-toggle="modal"><h3>Create attack</h3></button>
                    <div class="space_between"></div>
                    <button type="button" class="custom-button" style="background-color: #419FD6;  border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#sellAttack" data-bs-toggle="modal"> <h3>Sell an attack</h3></button>
                    <div class="space_between"></div>
                    <button type="button" class="custom-button" style="background-color: #419FD6;  border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#buyAttack" data-bs-toggle="modal"> <h3>Buy an attack</h3></button>
                </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
</template>



