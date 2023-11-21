<script setup>
import UserCardComponent from '../components/UserCardComponent.vue';
import ButtonComponentColor from '../components/ButtonComponentColor.vue';
import Menu from '../components/MenuComponent.vue'
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4">
                <UserCardComponent></UserCardComponent>
            </div>
            <div class="col-2 offset-6">
                <ButtonComponentColor label="Backlog"></ButtonComponentColor>
            </div>
        </div>
        <div class="row">
            <div class="col-2">
                <ButtonComponentColor class="profilebtn" label="Profile"></ButtonComponentColor>
            </div>
        </div>
        <div class="row align-items-start">
            <div class="col-1">
                <Menu></Menu>
            </div>
            <div class="col-10 text-center" >
                <h1 class="title display-4">
                    ピクセル戦
                </h1>
                <div>
                    <ButtonComponentColor class="serverbtn dropdown-toggle" label="Server" data-bs-toggle="dropdown" aria-expanded="false"></ButtonComponentColor>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    <ButtonComponentColor class="hostnamebtn" label="Hostname"></ButtonComponentColor>
                </div>
                <div>
                    <ButtonComponentColor class="leaderboardbtn" label="LeaderBoard"></ButtonComponentColor>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-2 offset-10">
                <button type="button" class="btn btn-danger logout">LogOut</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.logout{
    width: 10rem;
    height: 3rem;
    margin-top: 10rem;
    margin-left: 5rem;
}
.profilebtn{
    margin-top: 1rem;
    margin-right: 1rem;
    width: 15rem;
    height: 5rem;
}
.serverbtn{
    margin-top: 1rem;
    margin-right: 1rem;
    width: 20rem;
    height: 4rem;
}
.hostnamebtn{
    margin-top: 1rem;
    width: 9rem;
    height: 4rem;
}
.leaderboardbtn{
    margin-top: 1rem;
    width: 30rem;
    height: 4rem;
}
.title{
    font-family: 'PressStart2P', sans-serif;
    font-weight: 600;
    margin-top: 2rem;
}

</style>