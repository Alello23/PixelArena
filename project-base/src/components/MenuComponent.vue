<script setup>
import ButtonComponentColor from '../components/ButtonComponentColor.vue'
import shop from '../components/ShopComponent.vue'
import buy from './BuyAttackComponent.vue'
import sell from './SellAttackComponent.vue'
import create from './CreateAttackComponent.vue'
import confirm from './BuyAttackConfirmationComponent.vue'
</script>


<template>
    <div class="nav flex-column nav-tabs">
            <ButtonComponentColor label="Shop" class="btn" data-bs-toggle="modal" data-bs-target="#shop"></ButtonComponentColor>
            <shop></shop>
            <buy></buy>
            <sell></sell>
            <create></create>
            <confirm></confirm>
            
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