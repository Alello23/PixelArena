<script setup>
import UserCardComponent from '../components/UserCardComponent.vue';
import ButtonComponentColor from '../components/ButtonComponentColor.vue';
import MenuBar from '../components/MenuComponent.vue'
import MenuBarPhone from '../components/MenuPhoneComponent.vue'
import LeaderBoard from '../components/LeaderBoardComponent.vue'

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="row justify-content-between">
                <div class="col-4 d-none d-md-block">
                    <UserCardComponent></UserCardComponent>
                </div>
                <div class="col-2  d-none d-md-block">
                    <ButtonComponentColor label="Backlog" class="backlogbtn d-md-block"></ButtonComponentColor>
                </div>
                <div class="col-12  d-block d-md-none">
                    <MenuBarPhone></MenuBarPhone>
                </div>
            </div>
                <div class="col-2 d-none d-md-block">
                    <div class="profile_btn">   
                        <router-link to="/profile">
                            <ButtonComponentColor class="profilebtn" label="Profile"></ButtonComponentColor>
                        </router-link>
                    </div>
                </div>
            </div>
        <div class="row align-items-center" >
            <div class="col-4 d-none d-md-block">
                <MenuBar></MenuBar>
            </div>
            <div class="col-12 col-md-4 text-center align-self-center" >
                <div class="row">
                    <h1 class="title display-4">ピクセル戦</h1>
                </div>
                <div class="row">
                    <div class="container">
                    <div class="row" style="height: 5rem;">
                        <div class="col-8">
                            <ButtonComponentColor class="serverbtn dropdown-toggle" label="Server" data-bs-toggle="dropdown" aria-expanded="false"></ButtonComponentColor>
                            <ul class="dropdown-menu">
                                <RouterLink to="/wait">
                                    <li><a class="dropdown-item" href="#">Server 1</a></li>
                                    <li><a class="dropdown-item" href="#">Server 2</a></li>
                                    <li><a class="dropdown-item" href="#">Server 3</a></li>
                                </RouterLink>
                            </ul>
                        </div>
                        <div class="col-4">
                            <RouterLink to="/game">
                                <ButtonComponentColor class="hostnamebtn" label="Host"></ButtonComponentColor>
                            </RouterLink>
                               
                        </div>
                    </div>
                    <div class="row" style="height: 5rem;">
                        <div class="col-12">
                            <ButtonComponentColor class="leaderboardbtn" label="LeaderBoard" data-bs-toggle="modal" data-bs-target="#LeaderBoard"></ButtonComponentColor>
                            <LeaderBoard></LeaderBoard>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-end fixed-bottom">
            <div class="col-4 col-md-2 col-xl-1 align-self-end">
                    <router-link to="/">
                    <button type="button" class="btn btn-danger logout">LogOut</button>
                    </router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.profilebtn{    
    height: 4rem;
}
.backlogbtn{    
    height: 4rem;
}
.title{
    font-family: 'PressStart2P', sans-serif;
    font-weight: 600;
    margin-top: 2rem;
}
</style>