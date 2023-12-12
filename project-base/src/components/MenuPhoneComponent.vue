<script setup>
import ButtonComponentColor from '../components/ButtonComponentColor.vue';
import shop from '../components/ShopComponent.vue'
import buy from './BuyAttackComponent.vue'
import sell from './SellAttackComponent.vue'
import create from './CreateAttackComponent.vue'
import confirm from './BuyAttackConfirmationComponent.vue'

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
                    <shop id_p="shop_1"></shop>
                    <buy></buy>
                    <sell></sell>
                    <create></create>
                    <confirm></confirm>
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