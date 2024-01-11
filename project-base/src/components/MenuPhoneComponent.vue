<script setup>
import ButtonComponentColor from '../components/ButtonComponentColor.vue';
import CreateAttackComponent from '../components/CreateAttackComponent.vue';
import SellAttackComponent from '../components/SellAttackComponent.vue';
import buyAttackComponent from '../components/buyAttackComponent.vue';
import confirmBuyAttackComponent from '../components/confirmBuyAttackComponent.vue';
import shopComponent from '../components/shopComponent.vue';
</script>

<template>
    <p class="d-inline-flex gap-1">
    <ButtonComponentColor label="≣" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></ButtonComponentColor>
    </p>
    <div class="collapse" id="collapseExample">
        
            <div class="row justify-content-center">
                <div class="col-8">
                    <router-link to="/Profile">
                        <ButtonComponentColor label="Profile"></ButtonComponentColor>
                    </router-link>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <ButtonComponentColor label="Shop" class="btn" data-bs-toggle="modal" data-bs-target="#shop_1"></ButtonComponentColor>
                    <!-- Part del shop -->
                    <shopComponent id="shop_1" createAttack="#createAttack_1" sellAttack="#sellAttack_1" buyAttack="#buyAttack_1"></shopComponent>
                    <!-- Part del buy -->
                    <buyAttackComponent id="buyAttack_1" data_bs_target="#shop_1" buyConfirmation="#buyConfirmation_1"></buyAttackComponent>
                    <!-- Part del sell -->
                    <SellAttackComponent id="sellAttack_1" data_bs_target="#shop_1"></SellAttackComponent>
                    <!-- Part del create -->
                    <CreateAttackComponent id="createAttack_1" data_bs_target="#shop_1"></CreateAttackComponent>
                    <!-- Part del confirm -->
                    <confirmBuyAttackComponent id="buyConfirmation_1" data_bs_target="#buyAttack_1" ></confirmBuyAttackComponent>

                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <router-link to="/inventory">
                        <ButtonComponentColor label="Inventory" class="btn"></ButtonComponentColor>
                    </router-link>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <ButtonComponentColor label="BackLog"></ButtonComponentColor>
                </div>
            </div>
        </div>

</template>

<style scoped>
    .container{
        background-color: grey;
        border-radius: 10px;
    }

</style>