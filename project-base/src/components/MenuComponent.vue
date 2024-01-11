<script setup>
import ButtonComponentColor from '../components/ButtonComponentColor.vue'
import CreateAttackComponent from '../components/CreateAttackComponent.vue';
import SellAttackComponent from '../components/SellAttackComponent.vue';
import buyAttackComponent from '../components/buyAttackComponent.vue';
import confirmBuyAttackComponent from '../components/confirmBuyAttackComponent.vue';
import shopComponent from '../components/shopComponent.vue';
</script>


<template>
    <div class="nav flex-column nav-tabs">
            <ButtonComponentColor label="Shop" class="btn" data-bs-toggle="modal" data-bs-target="#shop"></ButtonComponentColor>
            <!-- Part del shop -->
            <shopComponent id="shop" createAttack="#createAttack" sellAttack="#sellAttack" buyAttack="#buyAttack"></shopComponent>
            <!-- Part del buy -->
            <buyAttackComponent id="buyAttack" data_bs_target="#shop" buyConfirmation="#buyConfirmation"></buyAttackComponent>
            <!-- Part del sell -->
            <SellAttackComponent id="sellAttack" data_bs_target="#shop"></SellAttackComponent>
            <!-- Part del create -->
            <CreateAttackComponent id="createAttack"  data_bs_target="#shop"></CreateAttackComponent>
            <!-- Part del confirm -->
            <confirmBuyAttackComponent id="buyConfirmation" ></confirmBuyAttackComponent>
            
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