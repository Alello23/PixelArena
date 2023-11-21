<script setup>
import Time from '../components/TimeComponent.vue'
import Menu from '../components/MenuGameComponent.vue'
import board from '../components/BoardComponent.vue'
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <Menu></Menu>
            </div>
            <div class="col-8" style="padding: 0;">
                <div class="row justify-content-center">
                    <div class="col-8 col-md-2" style="padding: 0;">
                        <Time></Time>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-self-end fixed-bottom">
            <div class="col-12" style="padding: 0;">
                <div><board></board></div>  
            </div>
        </div>
    </div>
</template>