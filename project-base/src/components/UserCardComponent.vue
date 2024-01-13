<template>
    <div class="card">
      <div class="row">
        <div class="col-3">
          <!-- Use v-bind to bind the src attribute to profile.img -->
          <img :src="profile.img" class="card-img" alt="Imagen de perfil">
        </div>
        <div class="col-9">
          <h5 class="card-title">{{ profileValue.player_ID }}</h5>
          <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{ width: (profileValue.xp / 1500) * 100 + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  computed: {
    // Change profile to a computed property
    profile() {
      return this.profileValue;
    },
  },
  methods: {
    // Change getplayerFromStore to use getters
    getplayerFromStore() {
      // Use the store to get the player value
      const profile = this.$store.getters.getplayer;
      return profile ? profile : null;
    },
  },
  data() {
    return {
      // Set profileValue to the player object
      profileValue: this.getplayerFromStore(),
    };
  },
};
</script>



<style scoped>
.progress-bar{
    width: 50%;
}
.card-title{
    margin-top: 1rem;
    font-weight: 600;
}
.card-img{
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
    margin-left: 1rem;
}
.card{
    border-radius: 7px;
    background-color: #87CEEB;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
}
.progress{
    margin-top: 1rem;
    margin-right: 1rem;
}
</style>
