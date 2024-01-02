<script setup>
import ButtonComponentColor from '../components/ButtonComponentColor.vue'
import DropDownComponent from '../components/DropDownComponent.vue';
import AddData from './AddData.vue';
</script>


<template>
    <div class="nav flex-column nav-tabs">
            <ButtonComponentColor label="Shop" class="btn" data-bs-toggle="modal" data-bs-target="#shop"></ButtonComponentColor>
            <!-- Part del shop -->
            <section class="modal fade" tabindex="-1" id="shop">
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
            </section>
            <!-- Part del buy -->
            <div class="modal fade" tabindex="-1" id="buyAttack">
            <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <section class="modal-body">
                <div class="d-flex justify-content-center">
                            <div class="col-7" style="padding: 0rem;">
                                <div class="col rounded-column-2" style="background-color: #DECA91;">
                                    <div class="row">
                                    <div class="col" >   
                                    </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-2">
                                            <button type="button" class="custom-button" style="background-color: #EAEAEA;"> <h4>€</h4></button>     
                                    </div>
                                        <div class="col-7">                    
                                            <button type="button" class="custom-button" style="background-color: #8C9A45;"> <h4>Name</h4></button>                        
                                    </div>
                                    <div class="col-3">                  
                                            <button type="button" class="custom-button" style="background-color: #6B8E9E;"> <h4>Power</h4></button>                      
                                    </div>
                                </div> 
                                <div class="row">
                                <div class="col" style=" max-height: 375px;  max-width: 500px; overflow-y: scroll; padding: 4rem;"> 
                                    <div class="space_between" >
                                    <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" >
                                        <div class="col-2 " style=" padding: 0rem;"> 
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;" data-bs-target="#buyConfirmation" data-bs-toggle="modal"> <h4>11</h4></button>    
                                    </div>
                                        <div class="col-7"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;" data-bs-target="#buyConfirmation" data-bs-toggle="modal"> <h4>Attackname</h4></button>    
                                    </div>
                                    <div class="col-3"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;" data-bs-target="#buyConfirmation" data-bs-toggle="modal"> <h4>20</h4></button>     
                                    </div>
                                    </div> 
                                    </div>
                                    <div class="space_between" >
                                    <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF; text-decoration: none;" data-bs-target="#buyConfirmation" data-bs-toggle="modal">
                                    
                                        <div class="col-2 " style=" padding: 0rem;"> 
                                        
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>25</h4></button>    
                                    </div>
                                        <div class="col-7"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Attackname</h4></button>    
                                    </div>
                                    <div class="col-3"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>17</h4></button>     
                                    </div>
                                    
                                </div>
                                    </div>
                                    <div class="space_between" >
                                    <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" data-bs-target="#buyConfirmation" data-bs-toggle="modal">
                                        <div class="col-2 " style=" padding: 0rem;"> 
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>73</h4></button>    
                                    </div>
                                        <div class="col-7"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Attackname</h4></button>    
                                    </div>
                                    <div class="col-3"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>14</h4></button>     
                                    </div>
                                    </div> 
                                    </div>
                                    <div class="space_between" >
                                    <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" data-bs-target="#buyConfirmation" data-bs-toggle="modal">
                                        <div class="col-2 " style=" padding: 0rem;"> 
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>24</h4></button>    
                                    </div>
                                        <div class="col-7"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Attackname</h4></button>    
                                    </div>
                                    <div class="col-3"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>16</h4></button>     
                                    </div>
                                    </div> 
                                    </div>
                                    <div class="space_between" >
                                    <div class="row rounded-column-1" style="padding: 0rem; background-color: #C0D6DF;" data-bs-target="#buyConfirmation" data-bs-toggle="modal">
                                        <div class="col-2 " style=" padding: 0rem;"> 
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>12</h4></button>    
                                    </div>
                                        <div class="col-7"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>Attackname</h4></button>    
                                    </div>
                                    <div class="col-3"  style=" padding: 0rem;">
                                            <button type="button" class="custom-button" style="background-color: #C0D6DF;  border: none;"> <h4>12</h4></button>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                        </div>
            </section>
            <footer class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-target="#shop" data-bs-toggle="modal">Back</button>
            </footer>
            </div>
            </div>
            </div>
            <!-- Part del sell -->
            <div class="modal fade" tabindex="-1" id="sellAttack">
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
                            <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#shop" data-bs-toggle="modal"> <h4>Cancel</h4></button>
                            </div>
                        </div>
                        <div class="col-2 ">
                            <div class="space_between">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="space_between">
                            <button type="button" class="custom-button" style="background-color: #419FD6;border: 4px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); padding: 20px 0; line-height: 2; color: white;" data-bs-target="#shop" data-bs-toggle="modal"> <h4>Sell</h4></button>
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
            <!-- Part del create -->
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
            <!-- Part del confirm -->
            <div class="modal fade" tabindex="-1" id="buyConfirmation">
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
            
            <router-link to="/inventory">
                <ButtonComponentColor label="Inventory" class="btn"></ButtonComponentColor>
            </router-link>
    </div>
</template>

<style scoped>
    .nav{
        background-color: #419FD6;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        width: 13rem;
        border-radius: 7px;
        margin-top: 2rem;
    }
    .btn{
        width: 8rem;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        height: 5rem;
    }
</style>