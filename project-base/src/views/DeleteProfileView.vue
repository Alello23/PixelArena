<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue';
import { useRouter } from 'vue-router';

const isSmallDevice = ref(false);
const router = useRouter();

const checkScreenSize = () => {
  isSmallDevice.value = window.innerWidth < 768; // Adjust the threshold as needed
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});

const deleteProfile = async () => {
  try {
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players';
    const profile = profile.value; // Access the computed property

    if (!profile || !profile.token) {
      console.error('Profile or token is undefined');
      return;
    }

    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${profile.token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Profile deleted successfully');
      // Perform any additional actions after successful profile deletion
      router.push('/'); // Redirect to the home page or another page
    } else {
      console.error('Failed to delete profile');
      // Handle the error if needed
    }
  } catch (error) {
    console.error('Error during profile deletion:', error);
    // Handle the error if needed
  }
};
</script>

<template>
<div class="rounded-column-1" style=" background-color: transparent; border: none; ">
    <header>
      <div class="col text-center">
        <h1>Delete Profile</h1>
     </div>
    </header>
<div class="col " style="padding: 0rem;">
  <article class="col-12" style="padding: 0rem; ">
    <div class="col rounded-column-2 text-center" style="background-color: #C0D6DF;" >
        <h1 > Profile </h1>
    </div>
  </article> 
  <section class="col"> 
    <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
          <div class="space_between" style="margin-right:5px; margin-left: 5px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"> <h4>{{ profileValue.player_ID }}</h4></button>
      </div>
        </div>
        <div v-else>
          <div class="space_between" style="margin-right:260px; margin-left: 260px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"> <h4>{{ profileValue.player_ID }}</h4></button>
      </div>
        </div>
      </div> 
      <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
          <div class="space_between" style="margin-right:5px; margin-left: 5px;">
        <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>level {{ profileValue.level }} {{ profileValue.xp }}xp</h4> </button>
      </div>
        </div>
        <div v-else>
          <div class="space_between" style="margin-right:260px; margin-left: 260px;">
        <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>level {{ profileValue.level }} {{ profileValue.xp }}xp</h4> </button>
      </div>
        </div>
      </div> 
      <div class="space_between" :class="{ 'isSmallDevice': isSmallDevice }">
        <div v-if="isSmallDevice">
          <div class="space_between" style="margin-right:5px; margin-left: 5px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>{{ profileValue.coins }}</h4> </button>
      </div>
        </div>
        <div v-else>
          <div class="space_between" style="margin-right:260px; margin-left: 260px;">
            <button type="button" class="custom-button" style="background-color: #DECA91;"><h4>{{ profileValue.coins }} Coins</h4> </button>
      </div>
        </div>
      </div> 
  </section> 
  <article class="col-12" style="padding: 0rem; " >
    <div class="col rounded-column-2 text-center" style="background-color: #6B8E9E;" >
        <h2 >Are you sure you want to delete your profile?</h2>
    </div>
     </article> 
     <section class="col" >
        <div class="row">
            <div class="col-2 ">
                <div class="space_between" >
                </div>
            </div>
            <div class="col-3 ">
                <div class="space_between" >
                  <ButtonComponent_information label="Yes" color="#8C9A45" @click="deleteProfile"></ButtonComponent_information>
                  </div>
            </div>
            <div class="col-2 ">
                <div class="space_between" >
                </div>
            </div>
            <div class="col-3">
                <div class="space_between">
                    <ButtonComponent_profile label="No" path="/profile" color="#CF5454"></ButtonComponent_profile>
                  </div>
            </div>
            <div class="col-2 ">
                <div class="space_between" >
                </div>
            </div>
       </div> 
       <div class="row">
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        <div class="col-4">
            <div class="space_between" >
                <ButtonComponent_profile label="return" path="/profile" color=""></ButtonComponent_profile>
              </div>
        </div>
        <div class="col-4 ">
            <div class="space_between" >
            </div>
        </div>
        
       </div>    
    </section>
</div>
</div>
</template>

<style scoped>

</style>