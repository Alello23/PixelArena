<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

// Variable para almacenar el game_ID obtenido
let currentGameID = null;

const leaveGame = async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players/arenas/current';
    const token = store.getters.getplayer.token;
    console.log('The value of the token is: ');

    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {
      const responseData = await response.json();

      if (responseData.length > 0) {
        currentGameID = responseData[0].game_ID;
        console.log('Current Game ID:');
        deleteGame();
      }

    } else {
      console.error('Error getting info');
    }
  } catch (error) {
    console.error('Error during fetching info:');
  }
};

const deleteGame = async () => {
  try {
    // Asegúrate de que currentGameID tenga un valor antes de hacer la solicitud DELETE
    if (!currentGameID) {
      console.error('No current game ID available');
      return;
    }

    const apiUrl = `https://balandrau.salle.url.edu/i3/arenas/${currentGameID}/play`;
    const token = store.getters.getplayer.token;
    console.log('The value of the token is');

    const headers = {
      'Bearer': token,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: headers,
    });

    if (response.ok) {
      console.log('Game deleted successfully');
      router.push('/home');
    } else {
      console.error('Failed to leave game');
    }
  } catch (error) {
    console.error('Error during leaving game');
  }
};

</script>

<template>
    <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="background-color: #87CEEB;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        <ul class="dropdown-menu">
            <li @click="leaveGame"><a class="dropdown-item" href="#">Exit</a></li>
        </ul>
    </div>
  </template>
  