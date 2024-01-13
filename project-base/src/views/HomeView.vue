<script setup>
import UserCardComponent from '../components/UserCardComponent.vue';
import ButtonComponentColor from '../components/ButtonComponentColor.vue';
import MenuBar from '../components/MenuComponent.vue'
import MenuBarPhone from '../components/MenuPhoneComponent.vue'
import LeaderBoard from '../components/LeaderBoardComponent.vue'
import InputComponent from '../components/InputComponent.vue';
import router from '../router';
import { ref } from 'vue';
import { useStore } from 'vuex';
import menuPhone from '../components/MenuGameComponent.vue'; //Temp



const store = useStore();

const toastMessage = ref('Hello, world! This is a toast message.');

const updateToastMessage = (newMessage) => {
  toastMessage.value = newMessage;

  // Mostrar el toast
  const toastBootstrap = new bootstrap.Toast(document.getElementById('liveToast'));
  toastBootstrap.show();
};

const carouselItems = ref([
  { image: 'src/assets/boards/2x2.png', style: 'transform: scale(2) translateY(30px);', caption: '2x2' },
  { image: 'src/assets/boards/3x3.png', style: 'transform: scale(2) translateY(30px);', caption: '3x3' },
  { image: 'src/assets/boards/4x4.png', style: 'transform: scale(2) translateY(30px);', caption: '4x4' },
  { image: 'src/assets/boards/5x5.png', style: 'transform: scale(2) translateY(30px);', caption: '5x5' },
  { image: 'src/assets/boards/6x6.png', style: 'transform: scale(2) translateY(30px);', caption: '6x6' },
  { image: 'src/assets/boards/7x7.png', style: 'transform: scale(1.5) translateY(30px);', caption: '7x7' },
  { image: 'src/assets/boards/8x8.png', style: 'transform: scale(1.45) translateY(30px);', caption: '8x8' },
  { image: 'src/assets/boards/9x9.png', style: 'transform: scale(1.2) translateY(30px);', caption: '9x9' },
  { image: 'src/assets/boards/10x10.png', style: 'transform: scale(1.2) translateY(30px);', caption: '10x10' },
]);

const hpVariable = ref('');
const nameVariable = ref('');
const currentIndex = ref(0);


const handleInput1 = (value) => {
    hpVariable.value = value;
    console.log('Saved hpVariable: ', hpVariable.value);
};

const handleInput2 = (value) => {
    nameVariable.value = value;
    console.log('Saved nameVariable: ', nameVariable.value);
};

const handlePrev = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselItems.value.length) % carouselItems.value.length;
};

const handleNext = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.value.length;
};

const createGame = async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/arenas';
    const token = store.getters.getplayer.token;
    console.log('The value of the token is: ', token);

    const requestData = {
      game_ID: nameVariable.value,
      size: parseInt(currentIndex.value) + 2,
      HP_max: parseInt(hpVariable.value),
    };

    console.log('Passed Name: ', nameVariable.value);
    console.log('Passed Size: ', currentIndex.value + 2);
    console.log('Passed hp: ', hpVariable.value);

    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      console.log('Game created successfully');
      router.push('/game');
    } else {
      console.error('Failed to create Game ');
      updateToastMessage('Failed to create Game');
    }
  } catch (error) {
    console.error('Error during attack creation:', error);
  }
};


const gamesList = ref([]);

const getGamesList = async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/arenas';
    const token = store.getters.getplayer.token;

    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers
    });

    if (response.status === 200) {
        const responseData = await response.json();

        // Filtrar los juegos que no están en curso
        const filteredGames = responseData.filter(game => !game.start);

        gamesList.value = filteredGames;
    } else {
      console.error('Failed to fetch games list');
    }
  } catch (error) {
    console.error('Error fetching games list:', error);
  }
};

const joinGame = async (gameId) => {
  try {
    const apiUrl = `https://balandrau.salle.url.edu/i3/arenas/${gameId}/play`; // Reemplaza con tu URL real
    const token = store.getters.getplayer.token;

    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
    });

    if (response.status === 200) {
      console.log('Entered the game successfully');
      router.push('/game');
    } else {
      console.error('Failed to enter the game');
    }
  } catch (error) {
    console.error('Error joining the game:', error);
  }
};

</script>

<template>
    <menuPhone></menuPhone> <!-- Temp -->
    <div class="container-fluid">
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Notify</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                {{ toastMessage }}
            </div>
            </div>
        </div>
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
                            <ButtonComponentColor class="serverbtn dropdown-toggle" label="Server" data-bs-toggle="dropdown" aria-expanded="false" @click = "getGamesList"></ButtonComponentColor>
                            
                            <ul class="dropdown-menu dropdown-menu-scrollable">
                            <li v-for="game in gamesList" :key="game.game_ID">
                                <a class="dropdown-item" href="#" @click="joinGame(game.game_ID)">
                                {{ game.game_ID }}
                                </a>
                            </li>
                            </ul>

                        </div>
                        <div class="col-4">
                            <!-- Button trigger modal -->
                            <ButtonComponentColor class="hostnamebtn" label="Host" data-bs-toggle="modal" data-bs-target="#HostGame"></ButtonComponentColor>
                            <!-- Modal -->
                            <div class="modal fade" id="HostGame" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Host Game</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <!-- Carousel -->
                                        <div id="carouselExample" class="carousel slide carousel-fade">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'carousel-item': true, 'active': index === currentIndex }">
                                                <img :src="item.image" class="d-block w-100" :style="item.style" alt="...">
                                                <div class="carousel-caption d-none d-md-block">
                                                <h2 style="font-weight: bold;">{{ item.caption }}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" @click="handlePrev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" @click="handleNext">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                        </div>
                                    </div>
                                    <!-- Input name -->
                                    <div class="space_between" style="margin-right: 60px; margin-left: 60px; margin-top: 20px; ">
                                        <div class="custom-button"  style="background-color: #DECA91;">
                                        <InputComponent label="Set name"
                                        :maxCharacters="20" @update:parentValue="handleInput2" v-model="nameVariable"></InputComponent>
                                        </div>
                                    </div>

                                    <!-- Input Health -->
                                    <div class="space_between" style="margin-right: 60px; margin-left: 60px; margin-top: 20px; ">
                                        <div class="custom-button"  style="background-color: #DECA91;">
                                        <InputComponent label="Set health"
                                        :maxCharacters="20" @update:parentValue="handleInput1" v-model="hpVariable"></InputComponent>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-success" @click="createGame" data-bs-dismiss="modal">Create Game</button>
                                </div>
                                </div>
                            </div>
                            </div>
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

.dropdown-menu-scrollable {
    max-height: 200px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #495057 #f8f9fa;
  }

  .dropdown-menu-scrollable::-webkit-scrollbar {
    width: 6px;
  }

  .dropdown-menu-scrollable::-webkit-scrollbar-thumb {
    background-color: #495057;
    border-radius: 3px;
  }

  .dropdown-menu-scrollable::-webkit-scrollbar-track {
    background-color: #f8f9fa;
  }
  .dropdown-menu{
        width: 30vh;
  }
</style>